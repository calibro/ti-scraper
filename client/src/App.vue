<template>
  <div id="app">
    <h1>TI Scraper</h1>
    <input-query @change="updateList"></input-query>
    <file-list :list="list"></file-list>
  </div>
</template>

<script>
// @ is an alias to /src
import FileList from '@/components/FileList.vue'
import InputQuery from '@/components/InputQuery.vue'

export default {
  name: 'home',
  components: {
    FileList,
    InputQuery
  },
  data () {
    return {
      list : []
    }
  },
  mounted() {
    this.updateList()
  },
  methods: {
    updateList () {
      fetch('/api/data')
        .then((response) => response.json())
        .then((data) => {
          this.list = data.list
        })
        .catch((error) => {
          console.error('Error:', error);
        })
    }
  },
}
</script>

<style lang="stylus">
body
  background #222
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 80%
  margin auto
  color #fff
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
