<template>
  <main class="flex flex-col min-h-[100vh] px-4 sm:px-8 md:px-16 lg:px-32 2xl:px-64">
    <header class="py-28 md:py-20 lg:py-14">
      <img
          class="mx-auto filter drop-shadow-logo dark:drop-shadow-dark-none invert dark:invert-[80%] dark:drop-shadow-none block w-2/3 sm:w-1/2 md:w-2/5"
          alt="logo"
          src="/img/davidz.svg"
      />
      <DarkModeToggle class="absolute top-20 right-0 md:top-10 md:right-4"/>
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
import DarkModeToggle from './components/DarkModeMatterToggle.vue'
import sites from './sites'</script>

<style>

</style>
