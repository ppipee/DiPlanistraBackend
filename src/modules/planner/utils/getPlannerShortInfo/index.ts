import { PlannerPlain } from 'modules/planner/models'
import { PlannerShortInfo } from 'modules/planner/types'

export default function getPlannerShortInfo(plannerPlain: PlannerPlain) {
	const planners: PlannerShortInfo[] = plannerPlain.planners.map((planner) => {
		const activities = planner.activities.map((activity) => activity.place.name).join(', ')

		return {
			day: planner.day,
			title: planner.title,
			description: planner.description,
			activities,
		}
	})

	return planners
}
