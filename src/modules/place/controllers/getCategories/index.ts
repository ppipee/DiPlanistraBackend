import to from 'await-to-js'
import { Request, Response } from 'express'

import { CategoryModal, CategoryPlain } from 'modules/place/models'
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
