import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'zone.js';

import { registerMicroApps } from 'qiankun';

registerMicroApps([
  // {
  //     name: "vue2App",
  //     props: { age: 10 }, //给子应用传数据
  //     entry: "//localhost:3001", //默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
  //     container: "#out-main", //挂载到主应用的哪个元素下
  //     activeRule: "/vue2", //当我劫持到路由地址为/vue2时，我就把http://localhost:3000这个应用挂载到#app-main的元素下
  // },
  {
    name: "vueChildOne",
    entry: "//localhost:3001",
    container: "#child-vue3-one-content",
    activeRule: "/child-one",
  },
  {
    name: "vueChildTwo",
    entry: "//localhost:3002",
    container: "#child-vue3-two-content",
    activeRule: "/child-two",
  },
  // {
  //   name: "vue2Child",
  //   entry: "//localhost:3003",
  //   container: "#child-vue2-one-content",
  //   activeRule: "/child-vue2-one",
  // },
  // {
  //   name: "reactApp1",
  //   entry: "//localhost:4001",
  //   container: "#child-react-one-content",
  //   activeRule: "/child-react-one",
  // },
  // {
  //   name: "angularApp1",
  //   entry: "//localhost:4200",
  //   container: "#child-angular-one-content",
  //   activeRule: "/child-angular-one",
  // },
]);

// setDefaultMountApp('/child-one')

// 启动 qiankun
// start();

createApp(App).use(ElementPlus).use(router).mount('#app-base')
