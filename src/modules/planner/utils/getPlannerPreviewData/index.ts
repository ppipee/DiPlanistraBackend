import { PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import { UserDoc } from 'modules/user/models'

import getPlannerShortInfo from '../getPlannerShortInfo'

export default function getPlannerPreviewData(plannerPlain: PlannerPlain, user?: UserDoc, shortInfo = true) {
	const isBookmark = Boolean(user?.bookmarks && user.bookmarks.includes(String(plannerPlain._id)))

	const plannerPreview: PlannerPreview = {
		id: plannerPlain._id,
		name: plannerPlain.name,
		startDate: plannerPlain.startDate,
		endDate: plannerPlain.endDate,
		dateLength: plannerPlain.dateLength,
		rating: plannerPlain.rating,
		isPublic: plannerPlain.isPublic,
		createdAt: plannerPlain.createdAt,
		updatedAt: plannerPlain.updatedAt,
		writer: plannerPlain.writer,
		style: plannerPlain.style,
		isOwner: String(plannerPlain.writer.id) === String(user?._id),
		numberOfBookmarks: plannerPlain.numberOfBookmarks,
		numberOfViews: plannerPlain.numberOfViews,
		isBookmark,
	}

	if (shortInfo) {
		plannerPreview.planners = getPlannerShortInfo(plannerPlain)
	}

	return plannerPreview
}
