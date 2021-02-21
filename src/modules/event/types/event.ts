export interface EventType {
	code: string
	description: string
}

export interface EventInformation {
	introduction: string
	htmlDetail: string
	types: EventType[]
}

export interface EventContact {
	phones: string[]
	emails: string[]
	urls: string[]
}

export interface EventDetail {
	eventId: string
	name: string
	latitude: number
	longitude: number
	picture: {
		webUrls: string[]
		mobileUrls: string[]
	}
	tags?: string[]
	periodDate: string
	eventStart: Date
	eventEnd: Date
	location: string
	destination: string
	information: EventInformation
	contact: EventContact
	updatedAt: Date
	isFavorite: boolean
}

export interface EventSearchInfo {
	eventId: string
	name: string
	latitude: number
	longitude: number
	introduction: string
	thumbnailUrl: string
	tags?: string[] | null
	periodDate: string
	eventStart: Date
	eventEnd: Date
	location: string
	destination: string
	updatedAt: Date
	distance: number
	isFavorite: boolean
}
