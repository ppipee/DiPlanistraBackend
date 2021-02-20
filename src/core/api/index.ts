import axios, { AxiosRequestConfig } from 'axios'

import { RequestConfig } from './types'

const api = {
	fetch: <Response>({ method, params, body, path, locale = 'th' }: RequestConfig) => {
		const headers = {
			Authorization: `Bearer ${process.env.TAT_API_KEY}`,
			'Content-Type': 'application/json',
		}

		const request: AxiosRequestConfig = {
			headers: {
				...headers,
				'Accept-Language': locale,
			},
			method,
			params,
			data: body,
			url: path,
		}

		return axios.request<Response>(request).then((res) => res.data)
	},
}

export default api
