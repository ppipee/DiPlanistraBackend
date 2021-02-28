import { City } from 'modules/place/types/city'

export default function resolveCity(data: City) {
	const city: City = {
		id: data.id,
		name: data.name,
		coordinate: data.coordinate,
		storageViewGroupId: data.storageViewGroupId,
	}

	return city
}
