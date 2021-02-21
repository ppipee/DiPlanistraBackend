import to from 'await-to-js'
import { Request, Response } from 'express'

import { LocaleType } from 'core/api/types'

import getTatEvent from 'modules/event/utils/getTatEvent'
import resolveEventPreviewerWithEventDetail from 'modules/event/utils/resolveEventPreviewerWithEventDetail'
import getEvents from 'modules/me/utils/getEvents'
import { UserDoc, UserModel } from 'modules/user/models'

const saveEvent = async (req: Request, res: Response) => {
	const { eventId } = req.body
	const user = req.user as UserDoc
	const { _id, events } = user
	const locale = req.query?.locale as LocaleType

	if (!eventId) {
		return res.status(400).send('require eventId to save event')
	}

	const isEventExisting = events.includes(eventId)

	if (isEventExisting) {
		return res.send(null)
	}

	const eventsUpdated = [...events, eventId]
	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(_id, { events: eventsUpdated }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send("can't store event to database")
	}

	const [errorGetEvent, _eventPreview] = await to(getTatEvent(eventId, locale))

	if (errorGetEvent) {
		return res.status(502).send('resolve event failed')
	}

	const eventPreview = resolveEventPreviewerWithEventDetail(_eventPreview.result, user)

	res.statusMessage = `events ${eventId} success`
	return res.send(eventPreview)
}

export default saveEvent
