<template>
  <div class="input-query">
      <h3>Scrape data {{this.running && this.message ? ' - Running: ' + this.message : ' - ' + this.message}}</h3>
      <input type="text" v-model="query" :disabled="running">
      <button @click="startQuery" :disabled="running">Send</button>
      <button @click="reset" :disabled="!running">Reset</button>
    </div>
</template>

<script>
export default {
  name: 'FileList',
  data () {
    return {
      query : 'fastwebnet.it',
      running: false,
      message: ''
    }
  },
  mounted() {
    this.checkStatus()
  },
  methods: {
    startQuery () {
      if(this.query) {
        fetch('/api/scrape', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({query: this.query})
        })
        .then(res=>res.json())
        .then(res => {
          this.running = res.running
          this.message = res.message
          this.checkStatus()
        });
      }
    },
    checkStatus () {
      let checkTimer = setInterval( ()=> {
        fetch('/api/scrape/status')
        .then(res=>res.json())
        .then(res => {
          console.log(res)
          this.running = res.running
          this.message = res.message

          if(!this.running) {
            clearInterval(checkTimer)
            this.$emit('change')
          }
        });
      }, 1000)
    },
    reset () {
      fetch('/api/scrape/reset')
      .then(res=>res.json())
      .then(res => {
        this.running = res.running
        this.message = res.message
      });
    }
  }
}
</script>

<style scoped lang="stylus">
.input-query
  input[type=text]
    height 35px
    width 300px
    font-size 22px
    &:disabled
      opacity 0.8
  button
    margin-left 20px
    height 35px
    font-size 22px
    &:disabled
      opacity 0.8
</style>
