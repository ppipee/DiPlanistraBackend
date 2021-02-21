import { ActivityPlace } from 'modules/planner/types'
import { Role } from 'modules/user/types'

export const USER_DEFAULT = {
	role: Role.Traveler,
	favoritePlace: [] as ActivityPlace[],
	bookmarks: [] as string[],
	events: [] as string[],
}
