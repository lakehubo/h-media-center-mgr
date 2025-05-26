import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken, removeToken } from '../utils/auth'
import { message } from 'ant-design-vue'
import router from '../router'

const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})

// 新版 axios 拦截器类型定义
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getToken()
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

http.interceptors.response.use(
    (response: AxiosResponse) => {
        const res = response.data
        if (res.code !== 200) {
            message.error(res.msg || '操作失败')
            if (res.code === 401) {
                removeToken()
                router.push('/login')
            }
            return Promise.reject(new Error(res.msg || 'Error'))
        }
        return res
    },
    (error) => {
        message.error(error.message || '网络错误')
        return Promise.reject(error)
    }
)

export default http
