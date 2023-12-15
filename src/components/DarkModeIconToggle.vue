<template>
  <div
    class="cursor-pointer h-8 w-8 text-white dark:text-gray-300"
    :title="isDark ? 'Dark' : 'Light'"
    @click="toggleMode"
  >
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-full hover:animate-spin-slow"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const setDarkMode = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    isDark.value = event.matches
    setDarkMode(event.matches)
  })
setDarkMode(isDark.value)
const toggleMode = () => {
  isDark.value = !isDark.value
  setDarkMode(isDark.value)
}
</script>
