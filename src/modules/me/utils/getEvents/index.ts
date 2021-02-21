import to from 'await-to-js'

import api from 'core/api'
import { LocaleType } from 'core/api/types'

import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { BASE_EVENT_URL } from 'modules/event/constants'
import { TatEventDetail } from 'modules/event/types/tatEvent'
import resolveEventPreviewerWithEventDetail from 'modules/event/utils/resolveEventPreviewerWithEventDetail/index'
import { UserDoc } from 'modules/user/models'

export default async function getEvents(favoriteEvents: string[], user: UserDoc, locale?: LocaleType) {
	const events = await Promise.all(
		favoriteEvents.map(async (eventId) => {
			const path = `${BASE_EVENT_URL}/${eventId}`

			const [error, data] = await to(
				api.fetch<{ result: TatEventDetail }>({ locale: locale as LocaleType, path }),
			)

			if (error || !data?.result) return null

			const tatEvent = data.result
			const event = resolveEventPreviewerWithEventDetail(tatEvent, user)

			return event
		}),
	)

	return filterArrayExistingValue(events)
}
