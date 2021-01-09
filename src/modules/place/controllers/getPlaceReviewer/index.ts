import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

import { BASE_BUSINESSES_URL } from 'modules/place/constants'
import { Page } from 'modules/place/types/page'
import { PlaceReview } from 'modules/place/types/review'
import resolvePlaceReview from 'modules/place/utils/resolvePlaceReview'

const getPlaceReviewer = async (req: Request, res: Response) => {
	const { publicId } = req.params
	const query = req.query
	const baseUrl = `${BASE_BUSINESSES_URL}/${publicId}/reviews.json`
	const url = buildUrlWithParams(baseUrl, query)

	const [error, data] = await to(got.get(url))

	if (error || !data) {
		res.send(error)
	}

	const reviewsPageData: Page<PlaceReview> = JSON.parse(data.body)
	const reviews = reviewsPageData.page.entities.map((review) => resolvePlaceReview(review))
	const reviewsPage: Page<PlaceReview> = {
		page: {
			...reviewsPageData.page,
			entities: reviews,
		},
	}

	res.send(reviewsPage)
}

export default getPlaceReviewer
