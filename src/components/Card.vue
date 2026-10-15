<template>
  <div class="transition nth-[6n+1]:line-y">
    <a class="block p-2 hover:bg-slate-900/5 dark:hover:bg-white/5" :href="site.url">
    <div class="p-2">
      <picture>
        <source v-if="site.logoDark" :srcset="site.logoDark" :media="mounted ? (isDark ? 'all' : 'not all') : '(prefers-color-scheme: dark)'" />
        <img
          class="aspect-square w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-md outline outline-offset-1 outline-slate-900/10 dark:outline-white/10 sm:rounded-xl lg:rounded-xl"
          :src="site.logo" :alt="site.title" width="150" height="150"
          :loading="eager ? 'eager' : 'lazy'" decoding="async"
        />
      </picture>
    </div>
    <div class="px-4 py-2 sm:px-2 text-center md:text-left">
      <p class="text-sm/6 font-medium">{{ site.title }}</p>
      <p
        class="font-mono text-xs/6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        {{ site.description }}
      </p>
    </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type PropType } from 'vue'
import { isDark } from '../theme'
import type { Site } from '../sites'

const mounted = ref(false)
onMounted(() => { mounted.value = true })

defineProps({
  eager: { type: Boolean, default: false },
  site: {
    type: Object as PropType<Site>,
    required: true
  }
})
</script>
