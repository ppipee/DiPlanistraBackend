import to from 'await-to-js'
import { Request, Response } from 'express'

import { CityModel, CityPlain } from 'modules/place/models'

const getCities = async (req: Request, res: Response) => {
	const { locale = 'th' } = req.query

	const [error, data] = await to<CityPlain>(Promise.resolve(CityModel.findOne({ locale: String(locale) })))

	if (error || !data) {
		return res.send(error)
	}

	return res.send({
		cities: data.cities,
	})
}

export default getCities
