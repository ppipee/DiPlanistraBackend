import { PlannerModel } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import getPlannerPreviewData from 'modules/planner/utils/getPlannerPreviewData'
import { UserDoc } from 'modules/user/models'

export default async function getBookmarkTrips(bookmarks: string[], user: UserDoc) {
	const planners = await Promise.all(bookmarks.map((tripId) => Promise.resolve(PlannerModel.findById(tripId))))

	const trips = planners.map((planner) => getPlannerPreviewData(planner, user))

	return trips
}
