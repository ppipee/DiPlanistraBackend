import { UserResponse } from 'modules//user/types'
import { PlannerDoc } from 'modules/planner/models'
import { Planner, PlannerPreview } from 'modules/planner/types'

export default function getPlannerData(plannerDoc: PlannerDoc, user: UserResponse, isPreview?: boolean) {
	const plannerPreview: PlannerPreview = {
		id: plannerDoc._id,
		name: plannerDoc.name,
		startDate: plannerDoc.startDate,
		endDate: plannerDoc.endDate,
		dateLength: plannerDoc.dateLength,
		rating: plannerDoc.rating,
		isPublic: plannerDoc.isPublic,
		createdAt: plannerDoc.createdAt,
		updatedAt: plannerDoc.updatedAt,
		writer: user,
	}

	if (isPreview) return plannerPreview

	const planner: Planner = {
		...plannerPreview,
		planners: plannerDoc.planners,
		style: plannerDoc.style,
	}

	return planner
}
