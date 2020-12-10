import { NextFunction, Request, Response } from 'express'

import { UserDoc } from 'modules/user/models'
import { Role } from 'modules/user/types'

export default function adminAuth(req: Request, res: Response, next: NextFunction) {
	const user = req.user as UserDoc

	if (user.role !== Role.Admin) {
		res.status(403).send({ message: "you don't have permission" })
	}

	next()
}
