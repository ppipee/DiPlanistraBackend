import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserDoc, UserModel } from 'modules/user/models'

const saveEvent = async (req: Request, res: Response) => {
	const { eventId } = req.body
	const { _id, events } = req.user as UserDoc

	if (!eventId) {
		return res.status(400).send('require eventId to save event')
	}

	const isEventExisting = events.includes(eventId)

	if (isEventExisting) {
		return res.send({ events })
	}

	const eventsUpdated = [...events, eventId]
	const [error, userUpdated] = await to(
		Promise.resolve(UserModel.findByIdAndUpdate(_id, { events: eventsUpdated }, { returnOriginal: false }).lean()),
	)

	if (error) {
		return res.status(502).send("can't store event to database")
	}

	res.statusMessage = `events ${eventId} success`
	return res.send({ events: userUpdated.events })
}

export default saveEvent
