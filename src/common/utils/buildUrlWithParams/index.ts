import qs from 'qs'

export default function buildUrlWithParams(path: string, query: Record<string, any> = {}) {
	const queryString = qs.stringify(query, {
		encode: true,
		arrayFormat: 'repeat',
	})

	return queryString ? `${path}?${queryString}` : path
}
