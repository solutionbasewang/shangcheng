import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/components/Home'
import Find from '@/components/Find'
import My from '@/components/My'
import Order from '@/components/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
