<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      class="container"
      v-bind:style="{transform: 'rotateX('+being.x+'deg)'+' rotateY('+being.y+'deg)'+' rotateZ('+being.z+'deg)'}"
    >
      <div class="p p1">1</div>
      <div class="p p2">2</div>
      <div class="p p3">3</div>
      <div class="p p4">4</div>
      <div class="p p5">5</div>
      <div class="p p6">6</div>
    </div>
    <div>
      <button v-on:click="go">掷骰子</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "find",
  data() {
    return {
      msg: "find",
      being: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },
  methods: {
    go: function() {
        setTimeout(() => {
          this.being.y = this.being.y+10;
        }, 100)
      
    },
    random: function(min, max) {
      return _.random(min, max);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container > div {
  position: absolute;
  /* opacity: .5; */
  line-height: 200px;
  text-align: center;
  border-radius: 10%;
  transform-origin: center center;
}
.hello {
  /* width: 100%;
  height: 800px; */
}
.p {
  width: 200px;
  height: 200px;
}
.container {
  transform-style: preserve-3d;
  /* transform: rotateX(-13deg) rotateY(45deg) rotateZ(0deg); */
  transition: all 200ms ease-in 50ms;
  position: relative;
  top: 50%;
  left: 30%;
  transform-origin:50% 50% 0px;
  perspective: 500px;
}
.p1 {
  background-color: red;
  transform: rotateX(90deg) translateZ(100px);
  /* z-index: 1; */
}
.p2 {
  background-color: yellow;
  transform: rotateY(90deg) translateZ(-100px);
  /* z-index: 2; */
}
.p3 {
  background-color: blue;
  transform: translateZ(-100px);
  /* z-index: 3; */
}
.p4 {
  background-color: orange;
  transform: rotateY(-90deg) translateZ(-100px);
  /* z-index: 4; */
}
.p5 {
  background-color: blueviolet;
  transform: translateZ(100px);
  /* z-index: 5; */
}
.p6 {
  background-color: bisque;
  transform: rotateX(-90deg) translateZ(100px);
  /* z-index: 6; */
}
</style>
