import axios from 'axios'
import { Request, Response } from 'express'

export const getWongnaiPlace = (req: Request, res: Response) => {
	return axios
		.get(
			'https://www.wongnai.com/attractions/346965xr-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3-%E0%B8%AA%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B9%8C%E0%B8%84.json',
		)
		.then((value) => {
			const placeData = value.data

			res.send(placeData)
		})
}
