import to from 'await-to-js'
import { Request, Response } from 'express'

import { UserModel } from 'modules/user/models'

const deleteUser = async (req: Request, res: Response) => {
	const { userId } = req.params

	if (!userId) {
		res.status(400).send({ message: 'required userId' })
	}

	const [error, user] = await to(Promise.resolve(UserModel.findByIdAndDelete(userId)))

	if (error || !user) {
		res.status(404).send({ message: error })
	}

	res.status(200).send({ message: 'delete success' })
}

export default deleteUser
