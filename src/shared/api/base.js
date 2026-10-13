import axios from 'axios'
import { API_URL } from '@/shared/config'

// @shared: общий экземпляр axios — все запросы идут только через него
export const api = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
})
