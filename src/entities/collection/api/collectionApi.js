import { api } from '@/shared/api'

export async function getCollections() {
	const res = await api.get('/collections.json')
	return res.data
}
