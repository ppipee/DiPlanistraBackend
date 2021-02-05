import to from 'await-to-js'
import { Request, Response } from 'express'

import { ActivityPlace } from 'modules/planner/types'
import getActivityPlace from 'modules/planner/utils/getActivityPlace'
import { UserDoc, UserModel } from 'modules/user/models'

const saveFavoritePlace = async (req: Request, res: Response) => {
	const { publicId } = req.body
	const { id, favoritePlaces } = req.user as UserDoc

	if (!publicId) {
		res.status(400).send('require publicId to save place to favorite places')
	}

	const placeData = (await getActivityPlace(publicId)) as ActivityPlace

	if (!placeData) {
		res.status(404).send('not found place')
	}

	favoritePlaces.push(placeData)

	const [error] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(id, { favoritePlaces }, { returnOriginal: false }).lean()),
	)

	if (error) {
		res.status(502).send("can't store favorite place to database")
	}

	res.send({ message: `favorite ${placeData.id} success` })
}

export default saveFavoritePlace
