import { api } from '@/shared/api'

export async function getCart() {
	const res = await api.get('/cart.json')
	return res.data
}
