import to from 'await-to-js'
import { Request, Response } from 'express'

import getFavoritePlace from 'modules/me/utils/getFavoritePlace'
import { ActivityPlace } from 'modules/planner/types'
import { UserDoc, UserModel } from 'modules/user/models'

const saveFavoritePlace = async (req: Request, res: Response) => {
	const { publicId } = req.body
	const { id, favoritePlaces } = req.user as UserDoc

	if (!publicId) {
		res.status(400).send('require publicId to save place to favorite places')
	}

	const isPlaceInclude = !!favoritePlaces.find((favoritePlace) => favoritePlace.publicId === publicId)

	if (isPlaceInclude) {
		res.send({ favoritePlaces })
	}

	const placeData = (await getFavoritePlace(publicId)) as ActivityPlace

	if (!placeData) {
		res.status(404).send('not found place')
	}

	favoritePlaces.push(placeData)

	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(id, { favoritePlaces }, { returnOriginal: false }).lean()),
	)

	if (error) {
		res.status(502).send("can't store favorite place to database")
	}

	res.statusMessage = `favorite ${placeData.publicId} success`
	res.send({ favoritePlaces: userUpdated.favoritePlaces })
}

export default saveFavoritePlace
