import { Request, Response } from 'express'
import { omit } from 'lodash'

import { FavoritePlacePlain } from 'modules/me/models'
import { UserDoc } from 'modules/user/models'

const getFavoritePlaces = async (req: Request, res: Response) => {
	const { favoritePlaces: favoritePlacePlains } = req.user as UserDoc

	const favoritePlaces = favoritePlacePlains.map((favoritePlace: FavoritePlacePlain) => {
		const place = omit(favoritePlace, '_id')

		return {
			...place,
			id: favoritePlace._id,
		}
	})

	res.send({ favoritePlaces })
}

export default getFavoritePlaces
