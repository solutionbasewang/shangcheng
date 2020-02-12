<template>
  <div class="viewbox">
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1><h1>{{ msg }}</h1><h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    v
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1><h1>{{ msg }}</h1><h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    v
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1><h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>

    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
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
      if (!event) event = window.event;
            console.log("scrollTop:"+this.scrollTop);//当前div的滚动条高度
            console.log("event.wheelDelta:"+event.wheelDelta);//每次滚动时变化的高度
            console.log("event.detail:"+event.detail);//同上，是兼容写法，滚动时变化的高度，和上一行的数据的值是不一样的
            this.scrollTop = this.scrollTop - (event.wheelDelta ? event.wheelDelta : -event.detail * 10);//直接设置滚动条高度
            console.log("after_this.scrollTop:"+this.scrollTop);
            return false;//取消滚动条的默认行为，就是不让他执行默认的滚动
    }
  },
  mounted() {
    //监听scroll事件
    window.addEventListener("mousewheel", this.a,false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewbox {
  /* height: 2000px;*/
  overflow: auto; 
  background-color: yellow;
}
</style>
