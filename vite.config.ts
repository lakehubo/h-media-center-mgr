import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,  // 关键！彻底禁止自动导入样式
          resolveIcons: true   // 图标还是自动引入
        })
      ],
      dts: 'src/components.d.ts',
    }),
  ],
  server: {
    port: 5173, // 你前端运行端口（默认5173）
    proxy: {
      // 只要你访问 /api 开头的请求，就会被代理到 Spring Boot
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 的地址
        changeOrigin: true,
        // 可选：如果后端接口没有/api前缀，需要重写
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
