import { PlannerPlain } from 'modules/planner/models'
import { ActivityPlan, Planner } from 'modules/planner/types'

export default function getActivitiesMapper({ planners }: Planner | PlannerPlain): Record<string, ActivityPlan[]> {
	const activitiesMapper = planners.reduce(
		(activities, planner) => ({ ...activities, [planner.day]: planner.activities }),
		{},
	)

	return activitiesMapper
}
