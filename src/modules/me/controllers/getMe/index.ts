import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

import getUserData from 'modules/user/utils/getUserData'

const getMe = async (req: Request, res: Response) => {
	passport.authenticate('jwt', { session: false }, (err, databaseUser, info) => {
		if (err) return res.send({ message: err })

		if (databaseUser) {
			const user = getUserData(databaseUser)

			return res.status(200).send(user)
		}

		return res.status(422).send(info)
	})(req, res)
}

export default getMe
