import { UserDoc } from 'modules/user/models'

export default function getUserData(user: UserDoc) {
	return {
		id: user._id,
		email: user.email,
		name: user.name,
		role: user.role,
	}
}
