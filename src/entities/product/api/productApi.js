import { api } from '@/shared/api'

export const getProducts = () => api.get('/products').then((res) => res.data)

export const getProductById = (id) => api.get(`/products/${id}`).then((res) => res.data)
