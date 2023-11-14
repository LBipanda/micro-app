<template>
  <h2>我是微应用angular项目</h2>
  <div id="child-angular-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "angualrChild",
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
