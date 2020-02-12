<template>
  <div class="viewbox" @scroll="a">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "home"
    };
  },
  methods: {
    a: function(e) {
      console.log("a");
      e.preventDefault();
    }
  },
  mounted() {
    //监听scroll事件
    window.addEventListener("scroll", this.a);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewbox {
  height: 2000px;
  overflow: auto;
  background-color: yellow;
}
</style>
