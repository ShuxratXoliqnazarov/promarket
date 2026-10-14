import { api } from '@/shared/api'

export async function getBanners() {
	const res = await api.get('/banners.json')
	return res.data
}

export async function getAdvantages() {
	const res = await api.get('/advantages.json')
	return res.data
}

export async function getSeo() {
	const res = await api.get('/seo.json')
	return res.data
}
