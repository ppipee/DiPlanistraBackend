import to from 'await-to-js'
import { Request, Response } from 'express'
import got from 'got'

import { BASE_WONGNAI_URL } from 'modules/place/constants'
import { City } from 'modules/place/types/city'
import resolveCity from 'modules/place/utils/resolveCity'

const getCities = async (req: Request, res: Response) => {
	const url = `${BASE_WONGNAI_URL}/cities.json`

	const [error, data] = await to(got.get(url))

	if (error || !data) {
		return res.send(error)
	}

	const citiesData = JSON.parse(data.body)
	const cities = citiesData.cities.map((city: City) => resolveCity(city))

	return res.send({
		cities,
	})
}

export default getCities
