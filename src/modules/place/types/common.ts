export interface BasicPhoto {
	photoId: string
	url: string
	contentUrl: string
	description?: string
	width?: number
	height?: number
	photoUrl?: string
	thumbnailUrl?: string
	smallUrl?: string
	largeUrl?: string
}

export interface LatLng {
	lat: number
	lng: number
}

export interface Time {
	iso: string
	full: string
	timePassed: string
}

export interface NameValue<T> {
	name: string
	value: T
}

export interface IdName {
	id: number
	name: string
}
