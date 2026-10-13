import { api } from '@/shared/api'

// @entity-api: Статья
export const getArticles = () => api.get('/articles').then((res) => res.data)
