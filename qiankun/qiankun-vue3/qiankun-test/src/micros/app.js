// src/micros/app.js
// 子应用列表
const apps = [
  {
    name: 'vue2-app', // 子应用app name 推荐与子应用的package的name一致
    entry: '//localhost:8081/', // 子应用的入口地址，就是你子应用运行起来的地址
    container: '#micro-container', // 挂载子应用内容的dom节点 `# + dom id`【见上面app.vue】
    activeRule: '/vue2App' // 子应用的路由前缀
  },
  {
    name: 'vue3-app',
    entry: '//localhost:8082/',
    container: '#micro-container',
    activeRule: '/vue3App'
  },
  {
    name: 'react-app',
    entry: '//localhost:8083/',
    container: '#micro-container',
    activeRule: '/react'
  }
]
 
export default apps