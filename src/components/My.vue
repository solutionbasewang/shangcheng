<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      msg: 'my'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {

position: absolute;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
transform-style: preserve-3d;
perspective: 100px;
transform: rotateX(-45deg)  rotateY(-45deg);
transform: rotateZ(1000px)
}
li {

width: 200px;
height: 200px;
position: absolute;
}
li:nth-of-type(2) {
background: rgba(255, 10, 230, 0.5);
transform: rotateX(90deg) translateZ(100px)   
}

li:nth-of-type(3) {
background: rgba(0, 10, 230, 0.5);
transform: rotateX(90deg) translateZ(-100px)
}
li:nth-of-type(4) {
background: rgba(25, 100, 230, 0.5);
transform: rotateY(90deg) translateZ(100px)
}

li:nth-of-type(5) {
background: rgba(0, 10, 71, 0.5);
transform: rotateY(90deg) translateZ(-100px)
}
li:nth-of-type(1) {

background: rgba(40, 200, 100, 1);

transform: translateZ(100px)

}

li:nth-of-type(6) {
background: rgba(255, 35, 30, 0.5);
transform: translateZ(-100px)
}
</style>
