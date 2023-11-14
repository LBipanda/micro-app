<template>
  <h2>我是微应用vue2项目</h2>
  <div id="child-vue2-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "vueChild",
  components: {},
  mounted() {
    this.$nextTick(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        start();
      }
    });
  },
};
</script>

<style>
</style>
