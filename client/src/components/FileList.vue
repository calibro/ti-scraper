<template>
  <div class="file-list mt-5" v-if="list.length > 0">
    <h4 class="mb-3">Data</h4>
    <table class="table table-bordered table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">filename</th>
          <th scope="col">created at</th>
          <th scope="col">size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <a :href="'/data/' + item.filename" target="_blank">{{
              item.filename
            }}</a>
          </td>
          <td>
            {{ printDate(item.created) }}
          </td>
          <td>
            {{ printSize(item.size) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import prettyBytes from "pretty-bytes";
import moment from "moment";

export default {
  name: "FileList",
  props: ["list"],
  methods: {
    printSize(val) {
      return prettyBytes(val);
    },
    printDate(val) {
      return moment(val).format("DD/MM/YYYY - HH:mm:ss");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
table
  background-color: white
  a
    color #FFC105
</style>
