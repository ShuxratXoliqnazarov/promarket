import { api } from '@/shared/api'

export async function getArticles() {
	const res = await api.get('/articles.json')
	return res.data
}
