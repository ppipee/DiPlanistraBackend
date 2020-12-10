import jwt from 'jsonwebtoken'
import { omit } from 'lodash'

import { UserDoc } from 'modules/user/models'

export default function getUserWithToken(user: UserDoc, secret: string) {
	const tokenUser = {
		id: user._id,
		email: user.email,
		name: user.name,
		password: user.password,
		role: user.role,
	}

	const token = jwt.sign(tokenUser, secret)

	return [omit(tokenUser, 'password'), token]
}
