import { api } from '@/shared/api'

// @entity-api: Коллекция плитки
export const getCollections = () => api.get('/collections').then((res) => res.data)
