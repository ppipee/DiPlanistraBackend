import to from 'await-to-js'
import { Request, Response } from 'express'

import { LocaleType } from 'core/api/types'

import getEvents from 'modules/me/utils/getEvents'
import { UserDoc, UserModel } from 'modules/user/models'

const unlikeEvent = async (req: Request, res: Response) => {
	const { eventId } = req.params
	const { locale } = req.query
	const { _id, events: eventPlains } = req.user as UserDoc

	const events = [...eventPlains]
	const eventIndex = events.findIndex((favoriteEventId) => favoriteEventId === eventId)

	if (eventIndex === -1) {
		return res.status(404).send('cannot find this event in your events')
	}

	events.splice(eventIndex, 1)
	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(_id, { events }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send('cannot remove this trip in database')
	}

	const [errorGetEvents, eventPreviews] = await to(
		getEvents(userUpdated.events, req.user as UserDoc, locale as LocaleType),
	)

	if (errorGetEvents) {
		return res.status(502).send('resolve event failed')
	}

	return res.send({ events: eventPreviews })
}

export default unlikeEvent
