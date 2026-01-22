<template>
  <div class="transition nth-[6n+1]:line-y">
    <a
      class="block p-2 hover:bg-slate-900/5 dark:hover:bg-white/5"
      :href="site.url"
    >
      <div class="p-2">
        <img
          v-if="site.logoDark"
          class="aspect-square w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-md outline outline-offset-1 outline-slate-900/10 dark:outline-white/10 sm:rounded-xl lg:rounded-xl dark:hidden"
          :src="site.logo"
          :alt="site.title"
        />
        <img
          v-if="site.logoDark"
          class="aspect-square w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-md outline outline-offset-1 outline-slate-900/10 dark:outline-white/10 sm:rounded-xl lg:rounded-xl hidden dark:block"
          :src="site.logoDark"
          :alt="site.title"
        />
        <img
          v-else
          class="aspect-square w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-md outline outline-offset-1 outline-slate-900/10 dark:outline-white/10 sm:rounded-xl lg:rounded-xl"
          :src="site.logo"
          :alt="site.title"
        />
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
import type { PropType } from 'vue'
import { Site } from '../sites'

defineProps({
  site: {
    type: Object as PropType<Site>,
    required: true
  }
})
</script>
