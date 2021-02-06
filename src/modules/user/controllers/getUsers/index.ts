import to from 'await-to-js'
import { Request, Response } from 'express'
import { isEmpty } from 'lodash'

import { UserModel } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

const getUsers = async (req: Request, res: Response) => {
	const [error, users] = await to(Promise.resolve(UserModel.find({})))
	const usersData = users.map((user) => getUserData(user, true))

	if (error || !users || isEmpty(users)) {
		res.status(404).send({ message: error })
	}

	res.status(200).send(usersData)
}

export default getUsers
