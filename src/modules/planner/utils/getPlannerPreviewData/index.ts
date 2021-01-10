import { UserResponse } from 'modules//user/types'
import { PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'

export default function getPlannerPreviewData(plannerPlain: PlannerPlain, user: UserResponse) {
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
		writer: user,
	}

	return plannerPreview
}
