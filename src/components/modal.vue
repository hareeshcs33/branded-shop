<template>
  <div class="modal m-auto" v-show="value">
    <div class="modal-content p-5">
      <h1>Modal Box........</h1>
      <div>{{ value }}</div>
      <button @click.prevent="close" class="btn btn-danger">
        Close
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    value: {
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  display: block;
}
.modal-content {
max-width: 70%;
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
