import { Request, Response } from 'express'

import { DomainValue } from 'modules/place/constants'

import getFavoriteEvents from '../getFavoriteEvents'
import getFavoritePlaces from '../getFavoritePlaces'

type Query = {
	domain: DomainValue
}

const getFavorite = async (req: Request<Query>, res: Response) => {
	const { domain } = req.query

	if (Number(domain) === DomainValue.EVENT) {
		return getFavoriteEvents(req as any, res)
	}

	return getFavoritePlaces(req, res)
}

export default getFavorite
