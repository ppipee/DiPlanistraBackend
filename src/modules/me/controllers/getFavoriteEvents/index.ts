import to from 'await-to-js'
import { Request, Response } from 'express'

import { LocaleType } from 'core/api/types'

import getEvents from 'modules/me/utils/getEvents'
import { UserDoc, UserModel } from 'modules/user/models'

const getFavoriteEvents = async (req: Request, res: Response) => {
	const { _id: id } = req.user as UserDoc
	const { locale } = req.query

	const [getError, user] = await to(Promise.resolve(UserModel.findById(id).lean()))

	if (getError) {
		return res.status(502).send('cannot find user in database')
	}
	const { events } = user as UserDoc

	const [error, eventPreviews] = await to(getEvents(events, req.user as UserDoc, locale as LocaleType))

	if (error) {
		return res.status(404).send(error.message)
	}

	return res.send({ events: eventPreviews })
}

export default getFavoriteEvents
