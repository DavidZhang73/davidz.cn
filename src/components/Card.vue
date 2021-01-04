<template>
  <a :href="site.url" class="card" :style="{'background-color': backgroundColor}">
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
    return {
      backgroundColor: '#e4f0fa'
    }
  },
  mounted () {
    const timeout = 3 // s
    const controller = new AbortController()
    setTimeout(() => controller.abort(), timeout * 1000)
    fetch(this.site.url, {
      mode: 'no-cors',
      signal: controller.signal
    })
      .catch(() => {
        this.backgroundColor = '#ffdede'
      })
  }
}
</script>

<style lang="stylus" scoped>
.card {
  padding 12px
  border-radius 25px
  box-shadow 10px 10px 15px #cdd8e1,
  -10px -10px 15px #ffffff
  @media (max-width: 768px) {
    box-shadow 5px 5px 10px #cdd8e1,
    -5px -5px 10px #ffffff
  }

  &:hover {
    background #e4f0fa
    box-shadow inset 5px 5px 10px #cdd8e1,
    inset -5px -5px 10px #ffffff
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
