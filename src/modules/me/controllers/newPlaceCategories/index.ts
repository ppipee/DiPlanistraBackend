import to from 'await-to-js'
import { Request, Response } from 'express'
import isEmpty from 'lodash/isEmpty'

import { LocaleType } from 'core/api/types'

import { DomainValue } from 'modules/place/constants'
import { CategoryModel, CategoryPlain } from 'modules/place/models'
import { UserDoc, UserModel } from 'modules/user/models'

interface BodyProps {
	categories?: number[]
}

interface QueryProps {
	locale?: LocaleType
}

const newPlaceCategories = async (req: Request, res: Response) => {
	const { categories = [] } = req.body as BodyProps
	const { locale = 'th' } = req.query as QueryProps
	const { _id } = req.user as UserDoc

	const [categoriesError, categoriesData] = await to<CategoryPlain>(
		Promise.resolve(CategoryModel.findOne({ domain: DomainValue.ATTRACTION, locale }).lean()),
	)

	if (categoriesError) {
		return res.status(502).send("can't find categories")
	}

	for (const category of categories) {
		const isInclude = Boolean(
			categoriesData.categories.find((c) => {
				if (c.id === category) {
					return true
				}

				return Boolean(c.categories.find((sub) => sub.id === category))
			}),
		)

		if (!isInclude) {
			return res.status(502).send("some your category isn't exist at categories")
		}
	}

	const newCategories = [...new Set(categories)]

	const [error, userUpdated] = await to(
		Promise.resolve(
			UserModel.findByIdAndUpdate(_id, { placeCategories: newCategories }, { returnOriginal: false }).lean(),
		),
	)

	if (error) {
		return res.status(502).send("can't store categories of place domain to database")
	}

	return res.send({ placeCategories: userUpdated.placeCategories })
}

export default newPlaceCategories
