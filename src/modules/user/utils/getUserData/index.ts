import { UserDoc } from 'modules/user/models'
import { User } from 'modules/user/types'

export default function getUserData(user: UserDoc, withData?: boolean) {
	const userData: User = {
		id: user._id,
		email: user.email,
		name: user.name,
		role: user.role,
	}

	if (withData) {
		userData.favoritePlaces = []
		userData.bookmarks = []
		userData.events = []
		userData.placeCategories = user.placeCategories
	}

	return userData
}
