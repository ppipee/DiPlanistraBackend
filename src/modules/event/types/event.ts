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

export interface BasicEvent {
	eventId: string
	name: string
	latitude: number
	longitude: number
	tags?: string[] | null
	periodDate: string
	eventStart: Date
	eventEnd: Date
	location: string
	destination: string
	updatedAt: Date
	isFavorite: boolean
}

export interface EventDetail extends BasicEvent {
	picture: {
		webUrls: string[]
		mobileUrls: string[]
	}
	information: EventInformation
	contact: EventContact
}

export interface EventSearchInfo extends BasicEvent {
	introduction: string
	thumbnailUrl: string
	distance: number
}
