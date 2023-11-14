<template>
  <h2>首页</h2>
  <div id="home"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "home",
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
