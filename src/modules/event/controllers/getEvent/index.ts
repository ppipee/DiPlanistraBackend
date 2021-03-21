import to from 'await-to-js'
import { Request, Response } from 'express'

import { LocaleType } from 'core/api/types'

import getTatEvent from 'modules/event/utils/getTatEvent'
import resolveEvent from 'modules/event/utils/resolveEvent'
import { UserDoc } from 'modules/user/models'

const getEvent = async (req: Request, res: Response) => {
	const user = req.user as UserDoc
	const { eventId } = req.params
	const locale = req.query?.locale as LocaleType

	if (!eventId) {
		return res.status(400).send('require event id to get data')
	}

	const [error, data] = await to(getTatEvent(eventId, locale))

	if (error) {
		return res.status(502).send(error.message)
	}

	const tatEvent = data.result
	const event = resolveEvent(tatEvent, user)

	return res.send(event)
}

export default getEvent
