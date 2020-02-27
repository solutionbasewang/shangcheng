<template>
  <div class="viewbox" id="asd" v-bind:style="{height:css.height+'px'}">
    <div class="part_1">
    <div class="tool">
      <i class="el-icon-setting"></i>
      <i class="el-icon-headset"></i>
      <i class="el-icon-chat-dot-square"></i>
    </div>
    <div class="myinfo">
      <div class="pic">
        <i class="el-icon-s-custom"></i>
      </div>
      <div class="phonenum"></div>
    </div>
    <div class="part_foot">

    </div>
    </div>
    
    <div class="part_2">

    </div>
  </div>
</template>

<script>
import {Scroll} from '../tool/Scroll.js'
import {winHeight} from '../tool/Screen.js'
export default {
  name: "home",
  data() {
    return {
      msg: "首页",
      css:{
        height:0
      }
    };
  },
  methods: {
    a: function(e) {
      if (!event) event = window.event;
      var getScroll = Scroll.ScollPostion()
            console.log(getScroll.t);
    }
  },
  mounted() {
        this.css.height = winHeight-45;

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewbox {
  /* height: 2000px;*/
  overflow: auto; 
  /* padding:0px 20px 0px 20px; */
}
.part_1{
  /* background-color: cornflowerblue; */
  background: radial-gradient(#3965fc,#2948ff);
  
}
.part_foot{
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  height: 15px;
}
.tool{
  text-align: right;
  padding: 20px 20px 0px 0px;
}
.tool > i{
  margin-right:10px;
font-size: 2rem;
}
.myinfo{
  text-align: left;
}
.myinfo>div{
  display: inline-block;
}
.pic{
}
.pic>i{
  font-size: 3rem;
}
</style>
