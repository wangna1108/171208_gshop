<template>
  <div class="app">
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/footer/footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
