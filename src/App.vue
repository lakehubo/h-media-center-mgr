<template>
  <router-view />
</template>

<script setup lang="ts">
// 通常不需要写任何 import，只用 setup 语法糖即可
</script>

<style scoped>
/* 你可以写全局的背景色等样式，比如登录页大背景色 */
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

</style>
