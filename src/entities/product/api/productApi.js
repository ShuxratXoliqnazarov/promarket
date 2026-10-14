import { api } from '@/shared/api'

export async function getProducts() {
	const res = await api.get('/products.json')
	return res.data
}
