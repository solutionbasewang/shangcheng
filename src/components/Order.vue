<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="d1"></div>
      <div class="d2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      msg: 'order'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  /* position: absolute; */
}
.container > div{
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.container{
  position: relative;
}
.d1{
  background-color: red;
}
.d2{
  background-color: yellow;
}
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
