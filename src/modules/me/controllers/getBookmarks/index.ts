import { Request, Response } from 'express'

import getBookmarkTrips from 'modules/me/utils/getBookmarkTrips'
import { UserDoc } from 'modules/user/models'

const getBookmarks = async (req: Request, res: Response) => {
	const { bookmarks } = req.user as UserDoc

	const trips = await getBookmarkTrips(bookmarks)

	return res.send({ bookmarks: trips })
}

export default getBookmarks
