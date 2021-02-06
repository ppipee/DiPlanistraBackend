import { PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import { UserDoc } from 'modules/user/models'

export default function getPlannerPreviewData(plannerPlain: PlannerPlain, user?: UserDoc) {
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
		isOwner: String(plannerPlain.writer.id) === String(user?._id),
	}

	return plannerPreview
}
