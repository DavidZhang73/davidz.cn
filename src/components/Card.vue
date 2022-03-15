<template>
  <a
      :href="site.url"
      class="block
      rounded-[25%] sm:rounded-[2rem]
      transition-[box-shadow_background_filter] duration-1000
      shadow-light-default active:shadow-light-active hover:bg-light-hover
      dark:shadow-dark-default dark:active:shadow-dark-active dark:hover:bg-dark-hover
      lg:shadow-light-default-lg active:lg:shadow-light-active-lg hover:lg:bg-light-hover-lg
      dark:lg:shadow-dark-default-lg dark:lg:active:shadow-dark-active-lg dark:lg:hover:bg-dark-hover-lg
      p-4 lg:p-5"
  >
    <img
        class="w-full aspect-square dark:filter dark:brightness-75 transition-[filter] duration-1000"
        :class="{'dark:hidden': site.logoDark}"
        :src="site.logo"
        alt="thumbnail"
    />
    <img
        class="hidden w-full aspect-square dark:filter dark:brightness-75 transition-[filter] duration-1000"
        :class="{'dark:block': site.logoDark}"
        :src="site.logoDark"
        alt="thumbnail"
    />
    <div class="hidden sm:block pt-2 lg:pb-1 text-center lg:text-left">{{ site.title }}</div>
    <div class="hidden lg:block pt-1 text-right font-light">{{ site.description }}</div>
  </a>
</template>

<script
    setup
    lang="ts"
>
import type { PropType } from 'vue'
import { Site } from '../sites'

defineProps({
  site: {
    type: Object as PropType<Site>,
    required: true
  }
})
</script>
