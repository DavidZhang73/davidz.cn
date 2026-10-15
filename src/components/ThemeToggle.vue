<template>
  <div class="relative h-[140px] w-[140px]">
    <component :is="AnimatedToggle" v-if="AnimatedToggle" />
    <button v-else type="button" aria-label="Toggle color theme" class="absolute inset-x-0 -top-5 mx-auto h-10 w-10 cursor-pointer text-2xl" @click="toggleMode">
      <span class="dark:hidden" aria-hidden="true">☀</span>
      <span class="hidden dark:inline" aria-hidden="true">☾</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, type Component } from 'vue'
import { setDarkMode, toggleMode } from '../theme'

const AnimatedToggle = shallowRef<Component>()
let cancel: (() => void) | undefined
let disposed = false
onMounted(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  setDarkMode(media.matches)
  const update = (event: MediaQueryListEvent) => setDarkMode(event.matches)
  media.addEventListener('change', update)
  const schedule = () => {
    // Two frames allow the static content to paint before loading the animation.
    const frame = requestAnimationFrame(() => {
      const second = requestAnimationFrame(() => {
        import('./DarkModeMatterToggle.vue')
          .then(module => { if (!disposed) AnimatedToggle.value = module.default })
          .catch(error => console.warn('Theme animation could not load', error))
      })
      cancel = () => cancelAnimationFrame(second)
    })
    cancel = () => cancelAnimationFrame(frame)
  }
  if (document.readyState === 'complete') schedule()
  else {
    window.addEventListener('load', schedule, { once: true })
    cancel = () => window.removeEventListener('load', schedule)
  }
  onCleanup = () => { cancel?.(); media.removeEventListener('change', update) }
})
let onCleanup: (() => void) | undefined
onUnmounted(() => { disposed = true; onCleanup?.() })
</script>
