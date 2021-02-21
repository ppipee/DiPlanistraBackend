import to from 'await-to-js'

import api from 'core/api'
import { LocaleType } from 'core/api/types'

import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import getTatEvent from 'modules/event/utils/getTatEvent'
import resolveEventPreviewerWithEventDetail from 'modules/event/utils/resolveEventPreviewerWithEventDetail/index'
import { UserDoc } from 'modules/user/models'

export default async function getEvents(favoriteEvents: string[], user: UserDoc, locale?: LocaleType) {
	const events = await Promise.all(
		favoriteEvents.map(async (eventId) => {
			const [error, data] = await to(getTatEvent(eventId, locale))

			if (error || !data?.result) return null

			const tatEvent = data.result
			const event = resolveEventPreviewerWithEventDetail(tatEvent, user)

			return event
		}),
	)

	return filterArrayExistingValue(events)
}
