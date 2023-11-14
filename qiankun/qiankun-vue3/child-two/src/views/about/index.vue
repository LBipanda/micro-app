<template>
  <img alt="Vue logo" src="@/assets/logo.jpg">
  <h2>我是child-two的about页面</h2>
  <button @click="$router.push('/')">返回home页面</button>
</template>

<script>
export default {
  name: "about",
  components: {},
};
</script>

<style>
</style>
