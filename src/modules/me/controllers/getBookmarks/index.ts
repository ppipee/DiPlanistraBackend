import to from 'await-to-js'
import { Request, Response } from 'express'

import getBookmarkTrips from 'modules/me/utils/getBookmarkTrips'
import { UserDoc } from 'modules/user/models'

const getBookmarks = async (req: Request, res: Response) => {
	const { bookmarks } = req.user as UserDoc

	const [error, trips] = await to(getBookmarkTrips(bookmarks, req.user as UserDoc))

	if (error) {
		return res.status(404).send(error.message)
	}

	return res.send({ bookmarks: trips })
}

export default getBookmarks
