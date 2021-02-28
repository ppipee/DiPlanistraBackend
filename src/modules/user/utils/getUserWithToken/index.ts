import jwt from 'jsonwebtoken'
import { omit } from 'lodash'

import { UserDoc } from 'modules/user/models'

import getUserData from '../getUserData'

export default function getUserWithToken(user: UserDoc, secret: string) {
	const tokenUser = {
		id: user._id,
		email: user.email,
		name: user.name,
		password: user.password,
		role: user.role,
	}

	const token = jwt.sign(tokenUser, secret)
	const userData = getUserData(user, true)

	return [userData, token]
}
