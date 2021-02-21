import to from 'await-to-js'
import { Request, Response } from 'express'

import { LocaleType } from 'core/api/types'

import getEvents from 'modules/me/utils/getEvents'
import { UserDoc } from 'modules/user/models'

const getFavoriteEvents = async (req: Request, res: Response) => {
	const { events } = req.user as UserDoc
	const { locale } = req.query

	const [error, eventPreviews] = await to(getEvents(events, req.user as UserDoc, locale as LocaleType))

	if (error) {
		return res.status(404).send(error.message)
	}

	return res.send({ events: eventPreviews })
}

export default getFavoriteEvents
