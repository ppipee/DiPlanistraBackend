import { omit } from 'lodash'

import { PlannerPlain } from 'modules/planner/models'
import { Planner } from 'modules/planner/types'
import { UserDoc } from 'modules/user/models'

import getPlannerPreviewData from '../getPlannerPreviewData'

export default async function getPlannerData(plannerPlain: PlannerPlain, user?: UserDoc): Promise<Planner> {
	const plannerPreview = getPlannerPreviewData(plannerPlain, user)

	const planners = plannerPlain.planners.map((planner) => {
		const activities = planner.activities.map((activity) => {
			const id = activity._id
			const newActivity = omit(activity, ['_id'])

			return { ...newActivity, id }
		})

		return { title: planner.title, description: planner.description, day: planner.day, activities }
	})
	console.log(planners)

	const planner: Planner = {
		...plannerPreview,
		planners,
		style: plannerPlain.style,
	}

	return planner
}
