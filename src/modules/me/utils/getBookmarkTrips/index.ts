import { PlannerModel } from 'modules/planner/models'

export default async function getBookmarkTrips(bookmarks: string[]) {
	const trips = await Promise.all(bookmarks.map((tripId) => Promise.resolve(PlannerModel.findById(tripId))))

	trips.map((trip) => ({ ...trip, isBookmark: true }))

	return trips
}
