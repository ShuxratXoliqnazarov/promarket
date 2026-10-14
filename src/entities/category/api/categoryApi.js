import { api } from '@/shared/api'

export async function getCategories() {
	const res = await api.get('/categories.json')
	return res.data
}
