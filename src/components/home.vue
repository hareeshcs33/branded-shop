<template>
  <div>
    <h1>Hi</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    message(){
      return this.$store.state.msg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
