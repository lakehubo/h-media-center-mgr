<template>
  <a-layout class="home-container">
    <!-- 左侧导航 -->
    <a-layout-sider collapsible class="home-sider-style">
      <div class="logo">🎬 MediaCenter</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="category" @click="go('/home/category')">
          <template #icon><icon-folder /></template>
          分类管理
        </a-menu-item>
        <a-menu-item key="recommend" @click="go('/home/recommend')">
          <template #icon><icon-star /></template>
          推荐榜单
        </a-menu-item>
        <a-menu-item key="stats" @click="go('/home/stats')">
          <template #icon><icon-pie-chart /></template>
          数据统计
        </a-menu-item>
        <a-menu-item key="settings" @click="go('/home/settings')">
          <template #icon><icon-setting /></template>
          设置
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- 右侧主区域 -->
    <a-layout class="home-content-style">
      <!-- 顶部 -->
      <a-layout-header class="header">
        <div class="title">家庭媒体中心</div>
      </a-layout-header>

      <!-- 页面内容 -->
      <a-layout-content style="margin: 24px">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer-style">
        MediaCenter @2025 Create by Lake
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  FolderOutlined as IconFolder,
  StarOutlined as IconStar,
  PieChartOutlined as IconPieChart,
  SettingOutlined as IconSetting
} from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()
const selectedKeys = ref([route.path.replace('/', '')])

function go(path: string) {
  selectedKeys.value = [path.replace('/', '')]
  router.push(path)
}
</script>

<style scoped>
.home-container{
  min-height: 100vh;
  min-width: 100vw;
  background: #ffffff;
}
.logo {
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 16px 0;
}
.header {
  padding: 0 24px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  color: #ffffff;
  background: rgb(0, 33, 64);
  align-items: center;
}
.home-content-style{
  background: #ffffff;
}
</style>
