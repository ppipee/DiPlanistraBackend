import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

import { BASE_PLACE_URL } from 'modules/place/constants'
import { Place } from 'modules/place/types/place'
import resolvePlace from 'modules/place/utils/resolvePlace'

const getPlace = async (req: Request, res: Response) => {
	const { publicId } = req.params
	const query = req.query
	const baseUrl = `${BASE_PLACE_URL}/${publicId}.json`
	const url = buildUrlWithParams(baseUrl, query)

	const [error, data] = await to(got.get(url))

	if (error || !data) {
		res.send(error)
	}

	const placeData: Place = JSON.parse(data.body)
	const place: Place = resolvePlace(placeData)

	res.send(place)
}

export default getPlace
