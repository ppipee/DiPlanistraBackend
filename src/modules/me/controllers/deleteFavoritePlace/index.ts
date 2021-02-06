import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserDoc, UserModel } from 'modules/user/models'

export default async function deleteFavoritePlace(req: Request, res: Response) {
	const { publicId } = req.params
	const user = req.user as UserDoc

	const favoritePlaces = [...user.favoritePlaces]
	const placeIndex = favoritePlaces.findIndex((place) => place.publicId === publicId)

	if (placeIndex === -1) {
		res.status(404).send('cannot file this place in favoritePlaces')
	}

	favoritePlaces.splice(placeIndex, 1)
	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(user._id, { favoritePlaces }, { returnOriginal: false }).lean()),
	)

	if (error) {
		res.status(502).send('cannot remove this place in database')
	}

	res.send({ favoritePlaces: userUpdated.favoritePlaces })
}
