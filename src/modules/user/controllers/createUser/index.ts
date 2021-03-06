import { Request, Response } from 'express'

import { SALT_ROUND } from 'core/auth/constants'
import hashBcrypt from 'core/auth/hashBcrypt'

import { UserModel } from 'modules/user/models'
import getUserWithToken from 'modules/user/utils/getUserWithToken'

import { USER_DEFAULT } from '../../constants'

const createUser = async (req: Request, res: Response) => {
	const { password } = req.body

	const hashingPassword = hashBcrypt(password, SALT_ROUND)

	const databaseUser = new UserModel({
		...req.body,
		password: hashingPassword,
		...USER_DEFAULT,
	})

	await databaseUser.save()

	const [user, token] = getUserWithToken(databaseUser, process.env.JWT_SECRET)

	return res.status(201).send({ user, token })
}

export default createUser
