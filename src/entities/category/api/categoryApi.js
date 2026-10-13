import { api } from '@/shared/api'

// @entity-api: Категория
export const getCategories = () => api.get('/categories').then((res) => res.data)
