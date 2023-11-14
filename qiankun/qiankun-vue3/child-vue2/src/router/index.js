// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue2App" : "/",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})