import http from './axios'

// 登录接口
export const login = (data: { username: string; password: string }) =>
    http.post('/api/auth/login', data)

// 获取当前用户信息
export const getUserInfo = () =>
    http.get('/api/auth/userinfo')

// 修改密码接口
export const changePassword = (data: { oldPassword: string; newPassword: string }) =>
    http.post('/api/auth/changePassword', data)
