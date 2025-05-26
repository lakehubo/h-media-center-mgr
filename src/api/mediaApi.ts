import http from './axios'

// 获取媒体资源列表（分页）
export const getMediaResources = (params: { page: number; size: number }) =>
    http.get('/api/media/list', { params })

// 获取单个媒体资源详情
export const getMediaDetail = (id: number) =>
    http.get(`/api/media/${id}`)

// 更新媒体资源信息
export const updateMedia = (id: number, data: object) =>
    http.put(`/api/media/${id}`, data)

// 删除媒体资源
export const deleteMedia = (id: number) =>
    http.delete(`/api/media/${id}`)
