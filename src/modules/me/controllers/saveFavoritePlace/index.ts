import { Request, Response } from 'express'

const saveFavoritePlace = async (req: Request, res: Response) => {
	const { publicId } = req.params

	if (!publicId) {
		res.status(400).send('require publicId to save place to favorite places')
	}

	res.send({ message: 'ok' })
}

export default saveFavoritePlace
