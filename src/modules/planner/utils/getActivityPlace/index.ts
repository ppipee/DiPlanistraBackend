import { ActivityPlace } from 'modules/planner/types'

export default function getActivityPlace(publicId: string, favoritePlaces: ActivityPlace[]) {
	const activityPlace = favoritePlaces.find((favoritePlace) => favoritePlace.publicId === publicId)

	return activityPlace
}
