<template>
  <main class="flex flex-col min-h-[100vh] px-4 sm:px-8 md:px-16 lg:px-32 2xl:px-64">
    <header class="py-28 md:py-20 lg:py-16">
      <img
          class="mx-auto filter drop-shadow-logo dark:drop-shadow-dark-none invert dark:invert-[80%] dark:drop-shadow-none block w-2/3 sm:w-1/2 md:w-2/5"
          alt="logo"
          src="/img/davidz.svg"
      />
      <div
          class="absolute top-6 right-6 cursor-pointer h-8 text-white"
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
    </header>
    <section class="flex-grow">
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-6 lg:gap-10 2lg:gap-11">
        <Card
            v-for="site in sites"
            :key="site.id"
            :site="site"
        />
      </div>
    </section>
    <footer class="flex-grow-0 mt-12 mb-6 font-light text-sm text-center">
      CopyRight © <a href="https://davidz.cn">DavidZ</a> <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
    >鲁ICP备19008089号-1</a>
    </footer>
  </main>
</template>

<script
    setup
    lang="ts"
>
import Card from './components/Card.vue'
import sites from './sites'
import { ref } from 'vue'

const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const setDarkMode = (isDark: Boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
setDarkMode(isDark.value)
const toggleMode = () => {
  isDark.value = !isDark.value
  setDarkMode(isDark.value)
}

</script>

<style>

</style>
