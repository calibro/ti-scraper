<template>
  <div class="input-query">
    <h4 class="mb-3">
      Search by IP, domain, or network owner
    </h4>
    <div class="row">
      <div class="col-4">
        <b-form-input
          type="text"
          v-model="query"
          :disabled="running"
          placeholder="reputation lookup"
        />
      </div>
      <div class="col-auto">
        <b-button
          class="mr-2"
          variant="warning"
          @click="startQuery"
          :disabled="running"
          >Scrape</b-button
        >
        <b-button @click="reset" :disabled="!running">Reset</b-button>
      </div>
      <div class="col">
        <h6 class="text-muted my-2 text-monospace">
          {{
            this.running && this.message
              ? "Running: " + this.message
              : this.message
          }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileList",
  data() {
    return {
      query: "fastwebnet.it",
      running: false,
      message: ""
    };
  },
  mounted() {
    this.checkStatus();
  },
  methods: {
    startQuery() {
      if (this.query) {
        fetch("/api/scrape", {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: this.query })
        })
          .then(res => res.json())
          .then(res => {
            this.running = res.running;
            this.message = res.message;
            this.checkStatus();
          });
      }
    },
    checkStatus() {
      let checkTimer = setInterval(() => {
        fetch("/api/scrape/status")
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.running = res.running;
            this.message = res.message;

            if (!this.running) {
              clearInterval(checkTimer);
              this.$emit("change");
            }
          });
      }, 1000);
    },
    reset() {
      fetch("/api/scrape/reset")
        .then(res => res.json())
        .then(res => {
          this.running = res.running;
          this.message = res.message;
        });
    }
  }
};
</script>

<style scoped lang="stylus"></style>
