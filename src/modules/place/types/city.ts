import { BasicPhoto, LatLng } from './common'

export interface City {
	id: number
	name: string
	coordinate: LatLng
	coverPicture: BasicPhoto
	storageViewGroupId: number
}
