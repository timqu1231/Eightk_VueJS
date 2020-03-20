<template>
  <div class="hello">
    <p>Hello</p>
    <!-- <canvas class="check"> -->
      <!-- <embed src="https://lispczz.github.io/pneumonia/"> -->
      <iframe src="https://lispczz.github.io/pneumonia/"></iframe>
      <!-- <a href="https://lispczz.github.io/pneumonia/">This is the example</a> -->
    <!-- </canvas> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
