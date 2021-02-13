import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserDoc, UserModel } from 'modules/user/models'

const bookmarkTrip = async (req: Request, res: Response) => {
	const { plannerId } = req.body
	const { _id, bookmarks } = req.user as UserDoc

	if (!plannerId) {
		return res.status(400).send('require plannerId to bookmark trip')
	}

	const isTripExisting = bookmarks.includes(plannerId)

	if (isTripExisting) {
		return res.send({ bookmarks })
	}

	const bookmarksUpdated = [...bookmarks, plannerId]
	const [error, userUpdated] = await to(
		Promise.resolve(
			UserModel.findByIdAndUpdate(_id, { bookmarks: bookmarksUpdated }, { returnOriginal: false }).lean(),
		),
	)

	if (error) {
		return res.status(502).send("can't store favorite place to database")
	}

	res.statusMessage = `favorite ${plannerId} success`
	return res.send({ bookmarks: userUpdated.bookmarks })
}

export default bookmarkTrip
