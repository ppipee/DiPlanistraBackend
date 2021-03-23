import { Client, DistanceMatrixRowElement, TravelMode } from '@googlemaps/google-maps-services-js'
import to from 'await-to-js'

import { LatLng } from 'modules/place/types/common'

export default async function getDistance(origin: LatLng, destination: LatLng): Promise<DistanceMatrixRowElement> {
	const SETTING = {
		key: process.env.GOOGLE_API_KEY,
		mode: TravelMode.driving,
	}

	const client = new Client({})
	const [error, distance] = await to(
		Promise.resolve(
			client.distancematrix({
				params: {
					...SETTING,
					origins: [origin],
					destinations: [destination],
				},
			}),
		),
	)

	if (error) {
		return { distance: { text: '' }, duration: { text: '' } } as DistanceMatrixRowElement
	}

	return distance.data.rows[0].elements[0]
}
