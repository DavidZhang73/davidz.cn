<template>
  <div class="container">
    <div class="header">
      <a href="https://davidz.cn">
        <img class="logo" alt="DavidZ logo" src="./assets/img/logo.svg">
      </a>
    </div>
    <div class="body">
      <card class="card" v-for="site in sites" :key="site.id" :site="site"></card>
    </div>
    <div class="footer">
      CopyRight © <a href="https://davidz.cn">DavidZ</a>
    </div>
  </div>

</template>

<script>
import sites from '@/sites'
import card from '@/components/card'

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
  height 100%

  .header {
    flex none
    margin 4% auto
    text-align center

    @media (max-width: 768px) {
      margin 10% auto
    }

    .logo {
      width 35%
      @media (max-width: 768px) {
        width 55%
      }
    }
  }

  .body {
    flex auto
    margin 0 15%
    display grid
    grid-template-columns repeat(6, 1fr)
    grid-gap 7% 4%
    align-content start
    @media (max-width: 1367px) {
      margin 0 5%
    }
    @media (max-width: 768px) {
      margin 0 7%
      grid-template-columns repeat(3, 1fr)
      grid-gap 5% 7%
    }
  }

  .footer {
    text-align center
    font-weight lighter
    margin 20px auto

    a {
      font-weight lighter
    }
  }
}
</style>
