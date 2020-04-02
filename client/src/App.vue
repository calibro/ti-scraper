<template>
  <div id="app">
    <div class="fw-header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="d-flex h-100 align-items-center justify-content-between"
            >
              <div class="logoCont">
                <img src="./assets/fwlogo.svg" height="100%" width="auto" />
              </div>
              <h6 class="my-0 text-uppercase">
                cybersecurity datavizlab
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="my-5">Talos intelligence scraper</h1>
          <input-query @change="updateList"></input-query>
          <file-list :list="list"></file-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FileList from "@/components/FileList.vue";
import InputQuery from "@/components/InputQuery.vue";

export default {
  name: "home",
  components: {
    FileList,
    InputQuery
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    updateList() {
      fetch("/api/data")
        .then(response => response.json())
        .then(data => {
          this.list = data.list;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};
</script>

<style lang="stylus">
body,html
  height 100%
  background-color #f2f2f2!important
#app
  height 100%
.fw-header
  background #000
  color #ffc107
  align-items: center;
  display: flex;
  height: 40px
.logoCont
  height 40px
  padding-top 10px
  padding-bottom 5px
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
