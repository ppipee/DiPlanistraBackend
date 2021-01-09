import { City } from 'modules/place/types/city'

export default function resolveCity(data: City) {
	const city: City = {
		id: data.id,
		name: data.name,
		coordinate: data.coordinate,
		coverPicture: data.coverPicture,
		storageViewGroupId: data.storageViewGroupId,
	}

	return city
}
