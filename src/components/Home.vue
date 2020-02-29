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
      <div class="phonenum">
        <div>13792121059</div>
        <div><label for="">山东泰安</label></div>
      </div>
    </div>
    <div class="zili">
      <div>网龄:<span>7个月></span></div>
      <div>信用分:<span>582分></span></div>
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
body{
font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
background: #fff; 
   }
.viewbox {
  /* height: 2000px;*/
  overflow: auto; 
  /* padding:0px 20px 0px 20px; */
}
.part_1{
  /* background-color: cornflowerblue; */
  background-color: #0099CC;
  color: #fff;
}
.part_foot{
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  height: 15px;
}
.tool{
  text-align: right;
  padding: 20px 0px 0px 0px;
}
.tool > i{
  margin-right:10px;
font-size: 2rem;
}
.myinfo{
  text-align: left;
  padding: 5px 0px 5px 20px;
}
.myinfo>div{
  display: inline-block;
}
.pic{
}
.pic>i{
  font-size: 2.5rem;
}
.zili{
  text-align: left;
  padding-left: 20px;
  font-size: 1rem;
}
.zili>div{
  display: inline-block;
  /* width: 30%; */
  min-width: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
  border: 1px #CCCCCC solid;
  font-size: .8rem;
}
.phonenum{
  font-size: .8rem;
  font-weight: bolder;
}
</style>
