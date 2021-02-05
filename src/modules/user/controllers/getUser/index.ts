import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserModel } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params

	if (!userId) {
		res.status(400).send({ message: 'required userId' })
	}

	const [error, user] = await to(Promise.resolve(UserModel.findById(userId)))

	if (error || !user) {
		res.status(404).send({ message: error })
	}

	res.status(200).send(getUserData(user))
}

export default getUser
