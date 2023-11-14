<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <span @click="goHome">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span @click="$router.push('/child-one')">child-vue3-one</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span @click="$router.push('/child-two')">child-vue3-one</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><document /></el-icon>
            <span @click="$router.push('/child-vue2-one')">child-vue2-one</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><document /></el-icon>
            <span @click="$router.push('/child-react-one')">child-react-one</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><document /></el-icon>
            <span @click="$router.push('/child-angular-one')">child-angular-one</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    // 跳转页面方法

    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.bens {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 9999999;
}
#app-base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
