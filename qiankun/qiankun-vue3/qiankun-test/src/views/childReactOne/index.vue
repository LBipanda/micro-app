<template>
  <h2>我是微应用react项目</h2>
  <div id="child-react-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "reactChild",
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
