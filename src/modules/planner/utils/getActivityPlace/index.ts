import to from 'await-to-js'
import got from 'got'

import { BASE_PLACE_URL } from 'modules/place/constants'
import resolveActivityPlace from 'modules/place/utils/resolveActvityPlace'

export default async function getActivityPlace(publicId: string) {
	const url = `${BASE_PLACE_URL}/${publicId}.json`

	const [error, data] = await to(got.get(url))

	if (error) {
		return error
	}

	const place = JSON.parse(data.body)
	const activityPlace = resolveActivityPlace(place)

	return activityPlace
}
