// src/main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import "./public-path";
 
Vue.config.productionTip = false
 
// 定义一个Vue实例
let instance = null
// 渲染方法
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app-child-vue2-one'): '#app-child-vue2-one')
}
// 独立运行时
if(!window.__POWERED_BY_QIANKUN__) {
  render()
}
//暴露主应用生命周期钩子
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log('vue2-app bootstraped');
}
/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props) {
  console.log('vue2-app mount', props);
  render(props);
}
/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("vue2-app unmount")
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}