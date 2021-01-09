import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'
import convertObjectKey from 'common/utils/covertObjectKey'

import { BASE_BUSINESSES_URL } from 'modules/place/constants'
import { Page } from 'modules/place/types/page'
import { Place, PlacePreview } from 'modules/place/types/place'
import resolvePlacePreview from 'modules/place/utils/resolvePlacePreview'

const getBusinesses = async (req: Request, res: Response) => {
	const query = req.query
	const newQuery = convertObjectKey(
		query,
		['rating', 'distance', 'lat', 'lng'],
		[
			'features.ratingRange',
			'spatialInfo.radius',
			'spatialInfo.coordinate.latitude',
			'spatialInfo.coordinate.longitude',
		],
	)

	const baseUrl = `${BASE_BUSINESSES_URL}.json`
	const url = buildUrlWithParams(baseUrl, newQuery)

	const [error, data] = await to(got.get(url))

	if (error || !data) {
		res.send(error)
	}

	const businessesPageData: Page<Place> = JSON.parse(data.body)
	const businesses = businessesPageData.page.entities.map((review) => resolvePlacePreview(review))
	const businessesPage: Page<PlacePreview> = {
		page: {
			...businessesPageData.page,
			entities: businesses,
		},
	}

	res.send(businessesPage)
}

export default getBusinesses
