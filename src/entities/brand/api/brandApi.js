import { api } from '@/shared/api'

export async function getBrands() {
	const res = await api.get('/brands.json')
	return res.data
}
