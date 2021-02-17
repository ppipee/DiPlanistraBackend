export enum RequestMethod {
	Get = 'get',
	Post = 'post',
	Put = 'put',
	Patch = 'patch',
	Delete = 'delete',
}

export type RequestMethodType = `${RequestMethod}`
export type LocalType = 'th' | 'en'

export interface RequestConfig {
	path: string
	method?: RequestMethodType
	params?: Record<string, any>
	body?: Record<string, any>
	locale?: LocalType
}
