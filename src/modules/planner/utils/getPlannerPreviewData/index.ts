import { User, UserResponse } from 'modules//user/types'
import { PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import { UserDoc } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

export default function getPlannerPreviewData(plannerPlain: PlannerPlain, user: UserDoc) {
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
		writer: getUserData(user),
	}

	return plannerPreview
}
