<template>
  <div
    class="grid flex-1 grid-rows-[1fr_auto] overflow-x-hidden grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]"
  >
    <div
      class="col-start-2 row-span-full row-start-1 max-sm:hidden border-x border-x-(--grid-line-color) bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]"
    ></div>
    <div
      class="col-start-4 row-span-full row-start-1 max-sm:hidden border-x border-x-(--grid-line-color) bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]"
    ></div>
    <div class="col-start-3 min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <div class="relative line-y flex items-center justify-center py-10">
        <div class="absolute inset-0 flex items-center justify-end">
          <DarkModeMatterToggle class="mt-15 -mr-15 sm:-mr-5 lg:mr-0" />
        </div>
        <div class="w-full max-w-80 md:max-w-110">
          <svg
            class="w-full fill-current text-slate-900 dark:text-slate-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 256"
          >
            <path
              d="M25.36 38.8L77.72 38.8Q110.5 38.8 127.44 60.71Q144.6 82.62 144.6 128.03Q144.6 173.18 127.44 195.09Q110.5 217 77.72 217L25.36 217Q13.04 217 13.04 202.48L13.04 53.32Q13.04 38.8 25.36 38.8ZM39 73.12L39 182.68Q39 185.85 41.86 185.85L77.72 185.85Q99.28 185.85 108.96 172.12Q118.64 158.39 118.64 127.77Q118.64 97.14 108.96 83.68Q99.5 69.95 77.72 69.95L41.86 69.95Q39 69.95 39 73.12ZM261.2 73.65L214.12 217L185.52 217L237.66 58.6Q241.84 45.93 249.32 40.91Q257.02 35.63 268.9 35.63Q280.56 35.63 288.04 40.91Q295.74 45.93 299.7 58.6L349.86 217L321.04 217L275.94 73.65Q273.96 67.58 268.68 67.58Q263.4 67.58 261.2 73.65ZM373.4 38.8L402 38.8L447.1 182.15Q449.08 188.22 454.36 188.22Q459.42 188.22 461.62 182.15L508.92 38.8L537.74 38.8L485.38 197.2Q481.2 209.87 473.5 215.15Q466.02 220.17 454.36 220.17Q443.36 220.17 435.22 215.42Q427.3 210.4 423.12 197.2L373.4 38.8ZM592.74 38.8L618.7 38.8L618.7 217L592.74 217L592.74 38.8ZM699.88 38.8L752.24 38.8Q785.02 38.8 801.96 60.71Q819.12 82.62 819.12 128.03Q819.12 173.18 801.96 195.09Q785.02 217 752.24 217L699.88 217Q687.56 217 687.56 202.48L687.56 53.32Q687.56 38.8 699.88 38.8ZM713.52 73.12L713.52 182.68Q713.52 185.85 716.38 185.85L752.24 185.85Q773.8 185.85 783.48 172.12Q793.16 158.39 793.16 127.77Q793.16 97.14 783.48 83.68Q774.02 69.95 752.24 69.95L716.38 69.95Q713.52 69.95 713.52 73.12ZM878.08 38.8L975.54 38.8Q993.36 38.8 1002.38 49.1Q1011.62 59.13 1011.62 77.87Q1011.62 93.18 1005.68 103.48Q999.74 113.51 987.86 119.58L906.9 161.03Q903.38 162.88 901.4 166.31Q899.42 169.74 899.42 174.23Q899.42 179.51 902.06 182.68Q904.92 185.85 910.42 185.85L1008.32 185.85L1008.32 217L908.66 217Q890.84 217 881.82 206.97Q872.8 196.67 872.8 177.93Q872.8 162.62 878.74 152.58Q884.68 142.29 896.78 136.22L977.3 94.77Q985 91.07 985 81.57Q985 76.29 982.14 73.12Q979.5 69.95 973.78 69.95L878.08 69.95L878.08 38.8Z"
            />
          </svg>
        </div>
      </div>
      <div class="mt-4 md:mt-6 lg:mt-10 relative">
        <div
          class="pointer-events-none absolute inset-0 z-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10"
        >
          <!-- 1 -->
          <div class="border-x border-(--grid-line-color) sm:border-l-0"></div>
          <!-- 2 -->
          <div class="border-x border-(--grid-line-color)"></div>
          <!-- 3 -->
          <div
            class="border-x border-(--grid-line-color) sm:border-r-0 md:border-r"
          ></div>
          <!-- 4 (md+) -->
          <div
            class="hidden md:block border-x border-(--grid-line-color)"
          ></div>
          <!-- 5 (md+) -->
          <div
            class="hidden md:block border-x border-(--grid-line-color) md:border-r-0 lg:border-r"
          ></div>
          <!-- 6 (lg+) -->
          <div
            class="hidden lg:block border-x border-(--grid-line-color) border-r-0"
          ></div>
        </div>
        <div
          class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10"
        >
          <Card
            v-for="site in sites"
            :key="site.id"
            :site="site"
          />
        </div>
      </div>
      <div class="line-y h-30 flex items-center justify-center">
        <div
          class="line-y text-xs/6 tracking-wide text-slate-600 dark:text-slate-400 leading-6 lg:leading-10"
        >
          CopyRight © <a href="https://davidz.cn">DavidZ</a>
          •
          <a href="https://beian.miit.gov.cn/" target="_blank"
            >鲁ICP备19008089号-1</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue'
import DarkModeMatterToggle from './components/DarkModeMatterToggle.vue'
import sites from './sites'
</script>
