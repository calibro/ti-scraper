<template>
  <div class="file-list">
    <h3>Data</h3>
    <ul class="file-list-ul">
      <li v-for="(item, index) in list" :key="index">
        <a :href="'/data/' + item.filename" target="_blank">{{item.filename}}</a>
        <span class="info"><span class="info-label">created:</span>{{printDate(item.created)}}</span>
        <span class="info"><span class="info-label">size:</span>{{printSize(item.size)}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import prettyBytes from 'pretty-bytes'
import moment from 'moment'

export default {
  name: 'FileList',
  props: ['list'],
  methods: {
    printSize(val) {
      return prettyBytes(val)
    },
    printDate(val) {
      return moment(val).format('DD/MM/YYYY - HH:mm:ss')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0
a
  color #42b983
.info
  margin-left 15px
  .info-label
    font-weight bold
    font-size 9px
    margin-right 5px
</style>
