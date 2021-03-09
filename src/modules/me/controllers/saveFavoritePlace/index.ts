import to from 'await-to-js'
import { Request, Response } from 'express'

import getFavoritePlace from 'modules/me/utils/getFavoritePlace'
import { ActivityPlace } from 'modules/planner/types'
import { UserDoc, UserModel } from 'modules/user/models'

const saveFavoritePlace = async (req: Request, res: Response) => {
	const { publicId } = req.body
	const { _id: id } = req.user as UserDoc

	const [getError, user] = await to(Promise.resolve(UserModel.findById(id).lean()))

	if (getError) {
		return res.status(502).send('cannot find user in database')
	}

	const favoritePlaces = user.favoritePlaces

	if (!publicId) {
		return res.status(400).send('require publicId to save place to favorite places')
	}

	const isPlaceInclude = !!favoritePlaces.find((favoritePlace) => favoritePlace.publicId === publicId)

	if (isPlaceInclude) {
		return res.send({ favoritePlaces })
	}

	const placeData = (await getFavoritePlace(publicId)) as ActivityPlace

	if (!placeData) {
		return res.status(404).send('not found place')
	}

	favoritePlaces.push(placeData)

	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(id, { favoritePlaces }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send("can't store favorite place to database")
	}

	res.statusMessage = `favorite ${placeData.publicId} success`
	return res.send({ favoritePlaces: userUpdated.favoritePlaces })
}

export default saveFavoritePlace
