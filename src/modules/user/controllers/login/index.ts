import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

import getUserWithToken from 'modules/user/utils/getUserWithToken'

const login = async (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('local', { session: false }, (err, databaseUser, info) => {
		if (err) return res.send({ message: err })

		if (databaseUser) {
			const [user, token] = getUserWithToken(databaseUser, process.env.JWT_SECRET)

			return res.status(200).send({ user, token })
		} else {
			return res.status(422).send(info)
		}
	})(req, res, next)
}

export default login
