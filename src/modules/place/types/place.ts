import { BasicPhoto, IdName, NameValue } from './common'

export enum PlaceCategories {
	Attractions = 'attractions',
	Restaurants = 'restaurants',
	Hotels = 'hotels',
}

export type FacilitiesProps = Record<PlaceFacility, boolean | null | undefined>

export enum PlaceFacility {
	Wifi = 'wifi',
	Toilet = 'toilet',
	WheelchairAccess = 'wheelchairAccess',
	Souvenir = 'souvenir',
	AttractionRestaurant = 'attractionRestaurant',
	Atm = 'atm',
	ParkingType = 'parkingType',
	PetFriendly = 'petFriendly',
	TrueMoneyWallet = 'trueMoneyWallet',
	CreditCardAccept = 'creditCardAccept',
}

export interface Place extends PlacePreview {
	lat: number
	lng: number
	contact: Contact
	wifi?: {
		name: string
		value: string
		remark: string
	}
	trueMoneyWallet?: boolean
	petFriendly?: boolean
	qrCodeAccepted?: boolean
	parkingType?: {
		id: number
		name: string
		remark: string
	}
	creditCardAccepted?: boolean
}

export interface PlacePreview {
	id: string
	isFavorite?: boolean
	publicId: string
	displayName: string
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
	coverPhoto?: BasicPhoto
	rating?: number
	distance?: number
	statistic: PlaceStatistic
	priceRange: NameValue<number>
	workingHoursStatus?: WorkingHourStatus
	attractionInformation?: AttractionInformation
	hours?: Hour[]
	categories: Categories[]
	domain: NameValue<number>
}

export interface PlaceStatistic {
	rating: number
	numberOfReviews: number
}

export interface Hour {
	day: number // starting from 1
	from: string
	to: string
}

export interface WorkingHourStatus {
	open: boolean
	message?: string
	closingSoon?: boolean
}

export interface Categories {
	id: number
	name: string
	numberOfBusinesses?: number
	categories?: Categories[]
}

export interface Category {
	domain: number
	locale: string
	categories: Categories[]
}

export interface AttractionInformation {
	atm?: boolean
	attractionRestaurant?: string
	wheelchairAccess?: boolean
	souvenir?: boolean
	toilet?: boolean
	entryFee?: {
		adult: number
		children: number
		feeCondition: string | boolean | null
		currency: string
	}
}

export interface Contact {
	address: {
		street: string
		hint: string
		subDistrict?: IdName
		district?: IdName
		city?: IdName
		streetAddress?: string
	}
	email?: string
	phoneno?: string
	line?: string
	instagram?: string
	twitter?: string
	facebookHomepage?: string
	homepage?: string // phase3
}
