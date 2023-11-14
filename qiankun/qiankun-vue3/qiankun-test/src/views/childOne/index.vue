<template>
  <h2>我是子应用 vue3-one</h2>
  <div id="child-vue3-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "childOne",
  components: {},
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style>
</style>
