import to from 'await-to-js'
import { Request, Response } from 'express'
import isNumber from 'lodash/isNumber'

import api from 'core/api'
import { LocaleType } from 'core/api/types'

import CITIES from 'common/utils/constants/cities'

import { BASE_EVENT_URL } from 'modules/event/constants'
import { TatEventSearchInfo } from 'modules/event/types/tatEvent'
import resolveEventPreviewer from 'modules/event/utils/resolveEventPreviewer'
import { UserDoc } from 'modules/user/models'

const DEFAULT_PARAMS = {
	numberofresult: 50,
}

interface Queries {
	locale?: LocaleType
	latitude?: string
	longitude?: string
	regions?: string
	sortby?: 'distance' | 'date'
}

const getEvents = async (req: Request<object, object, object, Queries>, res: Response) => {
	const { locale = 'th', latitude, longitude, regions, sortby = 'distance' } = req.query
	const user = req.user as UserDoc

	if (!isNumber(Number(regions)) && !(latitude && longitude)) {
		return res.status(400).send('require regions or geolocation')
	}

	let geolocation = ''

	if (latitude && longitude) {
		geolocation = `${latitude},${longitude}`
	} else {
		const city = CITIES.find((city) => city.id === Number(regions))
		const coordinate = city.coordinate

		geolocation = `${coordinate.lat},${coordinate.lng}`
	}

	const [error, data] = await to(
		api.fetch<{ result: TatEventSearchInfo[] }>({
			locale: locale as LocaleType,
			path: BASE_EVENT_URL,
			params: {
				...DEFAULT_PARAMS,
				sortby,
				geolocation,
			},
		}),
	)

	if (error) {
		return res.status(502).send(error.message)
	}

	const tatEvents = data.result
	const events = tatEvents.map((event) => resolveEventPreviewer(event, user))

	return res.send({ events })
}

export default getEvents
