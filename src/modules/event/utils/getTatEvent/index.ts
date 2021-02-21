import to from 'await-to-js'

import api from 'core/api'
import { LocaleType } from 'core/api/types'

import { BASE_EVENT_URL } from 'modules/event/constants'
import { TatEventDetail } from 'modules/event/types/tatEvent'

export default async function getTatEvent(eventId: string, locale?: LocaleType) {
	const path = `${BASE_EVENT_URL}/${eventId}`

	return api.fetch<{ result: TatEventDetail }>({ locale, path })
}
