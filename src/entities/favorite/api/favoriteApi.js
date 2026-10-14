import { api } from '@/shared/api'

export async function getFavorites() {
	const res = await api.get('/favorites.json')
	return res.data
}
