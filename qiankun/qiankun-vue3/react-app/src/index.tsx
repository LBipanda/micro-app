//必须在顶部引入
import "./public-path.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function render(props: { container: any; }) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
// 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
export async function bootstrap() {
  console.log("");
}
//应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
// @ts-ignore
export async function mount(props) {
  console.log('mount')
  render(props);
  // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

//应用每次 切出/卸载 会调用的unmount方法，通常在这里我们会卸载微应用的应用实例
// @ts-ignore
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}
// 可选生命周期 ，使用loadMicroApp方式加载应用时有效
export async function undate(props: any) {
  console.log(props)
}
// @ts-ignore
// 如果不是qiankun就走 可支持分别开发
if(!window.__POWERED_BY_QIANKUN__){
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
