import { api } from '@/shared/api'

// @entity-api: Избранное
export const getFavorites = () => api.get('/favorites').then((res) => res.data)

export const toggleFavorite = (productId) => api.post('/favorites/toggle', { productId }).then((res) => res.data)
