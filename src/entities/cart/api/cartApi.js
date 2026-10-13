import { api } from '@/shared/api'

// @entity-api: Корзина
export const getCart = () => api.get('/cart').then((res) => res.data)

export const addToCart = (productId) => api.post('/cart', { productId }).then((res) => res.data)
