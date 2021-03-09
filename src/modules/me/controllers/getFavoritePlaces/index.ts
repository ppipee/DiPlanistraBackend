import to from 'await-to-js'
import { Request, Response } from 'express'
import { isNil, omit } from 'lodash'

import { FavoritePlacePlain } from 'modules/me/models'
import { DomainValue } from 'modules/place/constants'
import { UserDoc, UserModel } from 'modules/user/models'

type Query = {
	domain: DomainValue
}

const getFavoritePlaces = async (req: Request<Query>, res: Response) => {
	const { _id: id } = req.user as UserDoc
	const { domain } = req.query

	const [getError, user] = await to(Promise.resolve(UserModel.findById(id).lean()))

	if (getError) {
		return res.status(502).send('cannot find user in database')
	}

	let { favoritePlaces: favoritePlacePlains } = user as UserDoc

	if (!isNil(Number(domain))) {
		favoritePlacePlains = favoritePlacePlains.filter((place) => place.domain.value === Number(domain))
	}

	const favoritePlaces = favoritePlacePlains.map((favoritePlace: FavoritePlacePlain) => {
		const place = omit(favoritePlace, '_id')

		return {
			...place,
			id: favoritePlace._id,
		}
	})

	return res.send({ favoritePlaces })
}

export default getFavoritePlaces
