<template>
  <div id="app">
    <router-view/>
    <!-- <div class="foot" @touchmove.prevent>
      <ul>
        <li>
          <router-link to="Home">
          <label>首页</label>
          </router-link>
        </li>
        <li>
          <router-link to="Find">
          <label>发现</label>
          </router-link>
        </li>
        <li>
          <router-link to="Order">
          <label>订单</label>
          </router-link>
        </li>
        <li>
         <router-link to="My">
          <label>我的</label>
          </router-link>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
}

.foot{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 45px;
  background-color: red;
}
.foot li{
  float: left;
  width:25%;
  list-style: none;
  text-align: center;
}
ul{
  /* margin: 0px; */
  padding: 0px;
}
</style>
