<template>
  <main
    class="flex flex-col min-h-[100vh] px-4 sm:px-8 md:px-16 lg:px-32 2xl:px-64"
  >
    <header class="py-28 md:py-20 lg:py-14">
      <svg
        class="mx-auto filter drop-shadow-logo dark:drop-shadow-dark-none invert dark:invert-[80%] dark:drop-shadow-none block w-2/3 sm:w-1/2 md:w-2/5 transition-[filter] duration-1000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 256"
      >
        <path
          id="path"
          class="path"
          d="M25.36 38.8L77.72 38.8Q110.5 38.8 127.44 60.71Q144.6 82.62 144.6 128.03Q144.6 173.18 127.44 195.09Q110.5 217 77.72 217L25.36 217Q13.04 217 13.04 202.48L13.04 53.32Q13.04 38.8 25.36 38.8ZM39 73.12L39 182.68Q39 185.85 41.86 185.85L77.72 185.85Q99.28 185.85 108.96 172.12Q118.64 158.39 118.64 127.77Q118.64 97.14 108.96 83.68Q99.5 69.95 77.72 69.95L41.86 69.95Q39 69.95 39 73.12ZM261.2 73.65L214.12 217L185.52 217L237.66 58.6Q241.84 45.93 249.32 40.91Q257.02 35.63 268.9 35.63Q280.56 35.63 288.04 40.91Q295.74 45.93 299.7 58.6L349.86 217L321.04 217L275.94 73.65Q273.96 67.58 268.68 67.58Q263.4 67.58 261.2 73.65ZM373.4 38.8L402 38.8L447.1 182.15Q449.08 188.22 454.36 188.22Q459.42 188.22 461.62 182.15L508.92 38.8L537.74 38.8L485.38 197.2Q481.2 209.87 473.5 215.15Q466.02 220.17 454.36 220.17Q443.36 220.17 435.22 215.42Q427.3 210.4 423.12 197.2L373.4 38.8ZM592.74 38.8L618.7 38.8L618.7 217L592.74 217L592.74 38.8ZM699.88 38.8L752.24 38.8Q785.02 38.8 801.96 60.71Q819.12 82.62 819.12 128.03Q819.12 173.18 801.96 195.09Q785.02 217 752.24 217L699.88 217Q687.56 217 687.56 202.48L687.56 53.32Q687.56 38.8 699.88 38.8ZM713.52 73.12L713.52 182.68Q713.52 185.85 716.38 185.85L752.24 185.85Q773.8 185.85 783.48 172.12Q793.16 158.39 793.16 127.77Q793.16 97.14 783.48 83.68Q774.02 69.95 752.24 69.95L716.38 69.95Q713.52 69.95 713.52 73.12ZM878.08 38.8L975.54 38.8Q993.36 38.8 1002.38 49.1Q1011.62 59.13 1011.62 77.87Q1011.62 93.18 1005.68 103.48Q999.74 113.51 987.86 119.58L906.9 161.03Q903.38 162.88 901.4 166.31Q899.42 169.74 899.42 174.23Q899.42 179.51 902.06 182.68Q904.92 185.85 910.42 185.85L1008.32 185.85L1008.32 217L908.66 217Q890.84 217 881.82 206.97Q872.8 196.67 872.8 177.93Q872.8 162.62 878.74 152.58Q884.68 142.29 896.78 136.22L977.3 94.77Q985 91.07 985 81.57Q985 76.29 982.14 73.12Q979.5 69.95 973.78 69.95L878.08 69.95L878.08 38.8Z"
        />
      </svg>
      <DarkModeToggle class="absolute top-20 right-0 md:top-10 md:right-4" />
    </header>
    <section class="flex-grow">
      <div
        class="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-6 lg:gap-10 2lg:gap-11"
      >
        <Card v-for="site in sites" :key="site.id" :site="site" />
      </div>
    </section>
    <footer class="flex-grow-0 mt-12 mb-6 font-light text-sm text-center">
      CopyRight © <a href="https://davidz.cn">DavidZ</a>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >鲁ICP备19008089号-1</a
      >
    </footer>
  </main>
</template>

<script setup lang="ts">
import Card from './components/Card.vue'
import DarkModeToggle from './components/DarkModeMatterToggle.vue'
import sites from './sites'
</script>

<style>
.path {
  stroke: #000000;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 4738.33203125;
  stroke-dashoffset: 4738.33203125;
  animation: 2s linear outline, 2s linear fill;
  animation-fill-mode: forwards;
}

@keyframes outline {
  from {
    stroke-dashoffset: 4738.33203125;
  }
  to {
    stroke-dashoffset: 3800;
  }
}

@keyframes fill {
  0% {
    fill: transparent;
  }
  100% {
    fill: #000000;
  }
}
</style>
