<template>
  <a :href="site.url" class="card">
    <div class="logo"
         :style="{background: 'url('+ site.logo +') center / contain no-repeat'}"></div>
    <div class="title">{{ site.title }}</div>
    <div class="description">{{ site.description }}</div>
  </a>
</template>

<script>

export default {
  name: 'card',
  props: { site: Object },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.card {
  padding 12px
  border-radius 25px
  background #e4f0fa
  box-shadow 10px 10px 15px #cdd8e1,
    -10px -10px 15px #ffffff
  @media (max-width: 768px) {
    box-shadow 5px 5px 10px #cdd8e1,
    -5px -5px 10px #ffffff
  }

  &:hover {
    background #e4f0fa
    box-shadow 20px 20px 20px #cdd8e1,
    -20px -20px 20px #ffffff
    transition: 0.5s ease;
    @media (max-width: 768px) {
      box-shadow none
    }
  }

  .logo {
    width 100%
    padding-bottom 100%
  }

  .title {
    padding 3px 0
    @media (max-width: 768px) {
      display none
    }
  }

  .description {
    padding 3px 0
    text-align right
    font-weight lighter
    @media (max-width: 768px) {
      display none
    }
  }
}
</style>
