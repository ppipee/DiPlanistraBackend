import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserDoc, UserModel } from 'modules/user/models'

export default async function deleteFavoritePlace(req: Request, res: Response) {
	const { publicId } = req.params
	const { _id: id } = req.user as UserDoc

	const [getError, user] = await to(Promise.resolve(UserModel.findById(id).lean()))

	if (getError) {
		return res.status(502).send('cannot find user in database')
	}

	const favoritePlaces = [...user.favoritePlaces]
	const placeIndex = favoritePlaces.findIndex((place) => place.publicId === publicId)

	if (placeIndex === -1) {
		return res.status(404).send('cannot file this place in favoritePlaces')
	}

	const placeDomain = favoritePlaces[placeIndex].domain.value
	favoritePlaces.splice(placeIndex, 1)

	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(user._id, { favoritePlaces }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send('cannot remove this place in database')
	}

	const favoritePlacesResponse = userUpdated.favoritePlaces.filter((place) => place.domain.value === placeDomain)

	return res.send({ favoritePlaces: favoritePlacesResponse })
}
