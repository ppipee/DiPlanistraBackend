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

export interface LocalizeName {
	primary: string
	thai?: string
	english?: string
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
