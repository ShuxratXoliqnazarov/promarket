import { api } from '@/shared/api'

// @entity-api: Бренд
export const getBrands = () => api.get('/brands').then((res) => res.data)
