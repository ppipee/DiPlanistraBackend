import to from 'await-to-js'
import { Request, Response } from 'express'

import getBookmarkTrips from 'modules/me/utils/getBookmarkTrips'
import { UserDoc, UserModel } from 'modules/user/models'

const unlikeTrip = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const { _id, bookmarks: bookmarkPlains } = req.user as UserDoc

	const bookmarks = [...bookmarkPlains]
	const plannerIndex = bookmarks.findIndex((tripId) => plannerId === tripId)

	if (plannerIndex === -1) {
		return res.status(404).send('cannot find this trip in bookmarks')
	}

	bookmarks.splice(plannerIndex, 1)
	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(_id, { bookmarks }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send('cannot remove this trip in database')
	}

	const trips = await getBookmarkTrips(userUpdated.bookmarks)

	return res.send({ bookmarks: trips })
}

export default unlikeTrip
