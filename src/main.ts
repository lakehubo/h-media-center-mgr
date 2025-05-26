import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 1. 引入Ant Design Vue及样式
import 'ant-design-vue/dist/reset.css'

// 2. 创建app并全局use
const app = createApp(App)
app.use(router)
app.mount('#app')
