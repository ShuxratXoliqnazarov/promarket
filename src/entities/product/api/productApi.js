import { api } from '@/shared/api'

// @entity-api: Товар
export const getBestsellers = (categoryId) =>
	api.get('/products/bestsellers', { params: { categoryId } }).then((res) => res.data)

export const getPromotions = (categoryId) =>
	api.get('/products/promotions', { params: { categoryId } }).then((res) => res.data)
