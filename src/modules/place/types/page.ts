export interface Page<T> {
	page: {
		pageInformation: PageInformation
		first: number
		last: number
		totalNumberOfPages: number
		totalNumberOfEntities: number
		entities: T[]
	}
}

interface PageInformation {
	number: number
	size: number
}
