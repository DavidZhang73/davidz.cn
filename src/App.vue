<template>
  <div class="container">
    <div class="header">
      <a href="https://davidz.cn">
        <img class="logo" alt="DavidZ logo" src="./assets/img/logo.svg">
      </a>
    </div>
    <div class="body">
      <card v-for="site in sites" :key="site.id" :site="site"></card>
    </div>
    <div class="footer">
      CopyRight © <a href="https://davidz.cn">DavidZ</a> <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备19008089号-1</a>
    </div>
  </div>

</template>

<script>
import sites from '@/sites'
import card from '@/components/Card'

export default {
  name: 'App',
  components: {
    card: card
  },
  data () {
    return {
      sites
    }
  }
}
</script>

<style lang="stylus">
* {
  margin 0
  padding 0
  font-weight normal
  color #3c3c3c
  word-wrap break-word
}

html,
body {
  height 100%
}

body {
  font-family 'Microsoft Yahei', sans-serif
  background-color #e4f0fa
}

a {
  color #3c3c3c
  text-decoration none
}

a:hover {
  color #000
}

.container {
  display flex
  flex-direction column
  justify-content space-between
  min-height 100vh

  .header {
    margin 4vw auto 2vw auto
    text-align center

    @media (max-width: 768px) {
      margin 10% auto
    }

    .logo {
      width 35%
      filter invert(100%) drop-shadow(10px 10px 10px #cdd8e1) drop-shadow(-10px -10px 10px #ffffff)
      @media (max-width: 768px) {
        width 55%
      }
    }
  }

  .body {
    margin 0 15vw
    display grid
    grid-template-columns repeat(6, 1fr)
    grid-gap 3vw
    align-content start
    @media (max-width: 1367px) {
      margin 0 5%
    }
    @media (max-width: 768px) {
      margin 0 7vw
      grid-template-columns repeat(3, 1fr)
      grid-gap 5vw
    }
  }

  .footer {
    margin 20px auto 20px auto
    text-align center
    font-size small
    font-weight lighter

    a {
      font-weight lighter
    }
  }
}
</style>
