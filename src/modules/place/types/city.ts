import { LatLng } from './common'

export interface City {
	id: number
	name: string
	coordinate: LatLng
	storageViewGroupId: number
}

export interface Cities {
	locale: string
	cities: City[]
}
