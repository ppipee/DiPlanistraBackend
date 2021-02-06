import { UserDoc } from 'modules/user/models'
import { User } from 'modules/user/types'

export default function getUserData(user: UserDoc, withFavorite?: boolean) {
	const userData: User = {
		id: user._id,
		email: user.email,
		name: user.name,
		role: user.role,
	}

	if (withFavorite) {
		userData.favoritePlaces = user.favoritePlaces
	}

	return userData
}
