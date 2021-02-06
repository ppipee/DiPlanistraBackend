import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

import { BASE_WONGNAI_URL } from 'modules/place/constants'
import { City } from 'modules/place/types/city'
import resolveCategory from 'modules/place/utils/resolveCategory'

const getCategories = async (req: Request, res: Response) => {
	const query = req.query
	const baseUrl = `${BASE_WONGNAI_URL}/categories.json`
	const url = buildUrlWithParams(baseUrl, query)

	const [error, data] = await to(got.get(url))

	if (error || !data) {
		return res.send(error)
	}

	const categoriesData = JSON.parse(data.body)
	const categories = categoriesData.categories.map((city: City) => resolveCategory(city))

	return res.send({
		categories,
	})
}

export default getCategories
