<template>
  <div class="login-bg">
    <!-- 左上光斑 -->
    <div class="bg-blur-ball ball-1"></div>
    <!-- 右下光斑 -->
    <div class="bg-blur-ball ball-2"></div>
    <div class="login-container">
      <a-card title="用户登录" :bordered="false" style="width: 380px; box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.15); border-radius: 16px;">
        <a-form
            layout="vertical"
            :model="form"
            @finish="onLogin"
        >
          <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
            <a-input v-model:value="form.username" placeholder="用户名" />
          </a-form-item>
          <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
            <a-input-password v-model:value="form.password" placeholder="密码" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" block :loading="loading">登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { login } from '../api/userApi'
import { setToken } from '../utils/auth'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const form = reactive({
  username: '',
  password: ''
})

const onLogin = async () => {
  loading.value = true
  try {
    const res = await login(form)
    setToken(res.data.token)
    message.success('登录成功')
    router.push('/home')
  } catch (e) {
    // 错误已由拦截器统一处理
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-bg {
  position: fixed;
  left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #d0eaff 0%, #e7cfff 100%);
  min-height: 100vh;
  min-width: 100vw;
}
.bg-blur-ball {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}
.ball-1 {
  width: 340px;
  height: 340px;
  left: -90px;
  top: -90px;
  background: #8ec5fc;
}
.ball-2 {
  width: 430px;
  height: 430px;
  right: -110px;
  bottom: -120px;
  background: #e0c3fc;
}

.login-container {
  position: fixed;
  left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

:deep(.ant-card-head-title) {
  font-weight: bold;
  font-size: 22px;
  color: #2c3e50;
  letter-spacing: 1px;
}

:deep(.ant-card) {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
}
</style>
