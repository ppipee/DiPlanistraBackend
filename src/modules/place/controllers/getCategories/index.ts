import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

import { BASE_WONGNAI_URL } from 'modules/place/constants'
import { CategoryModal, CategoryPlain } from 'modules/place/models'
import { City } from 'modules/place/types/city'
import resolveCategory from 'modules/place/utils/resolveCategory'

const getCategories = async (req: Request, res: Response) => {
	const { domain, locale = 'th' } = req.query
	if (!domain) {
		return res.sendStatus(400)
	}

	const [error, data] = await to<CategoryPlain>(
		Promise.resolve(CategoryModal.findOne({ domain: Number(domain), locale: String(locale) })),
	)

	if (error || !data) {
		return res.send(error)
	}

	const categories = data.categories.map((category) => resolveCategory(category))

	return res.send({
		categories,
	})
}

export default getCategories
