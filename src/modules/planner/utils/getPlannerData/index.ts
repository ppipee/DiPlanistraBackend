import { UserResponse } from 'modules//user/types'
import { PlannerDoc } from 'modules/planner/models'

export default function getPlannerData(plannerDoc: PlannerDoc, user: UserResponse) {
	const planner = {
		id: plannerDoc._id,
		name: plannerDoc.name,
		startDate: plannerDoc.startDate,
		endDate: plannerDoc.endDate,
		dateLength: plannerDoc.dateLength,
		rating: plannerDoc.rating,
		isPublic: plannerDoc.isPublic,
		planner: plannerDoc.planner,
		style: plannerDoc.style,
		writer: user,
	}

	return planner
}
