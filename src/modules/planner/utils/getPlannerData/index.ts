import { omit } from 'lodash'

import { UserResponse } from 'modules//user/types'
import { PlannerPlain } from 'modules/planner/models'
import { ActivityPlace, Planner, PlannerPreview } from 'modules/planner/types'

import getActivityPlace from '../getActivityPlace'
import getPlannerPreviewData from '../getPlannerPreviewData'

export default async function getPlannerData(plannerPlain: PlannerPlain, user: UserResponse): Promise<Planner> {
	const plannerPreview = getPlannerPreviewData(plannerPlain, user)

	const activitiesMapper: string[] = [] // [{ placeId, i, j }]

	plannerPlain.planners.forEach((planner) => {
		planner.activities.forEach((activity) => {
			activitiesMapper.push(activity.placeId)
		})
	})

	const placesData = await Promise.all(activitiesMapper.map((publicId) => getActivityPlace(publicId)))

	let index = 0
	const planners = plannerPlain.planners.map((planner) => {
		const activities = planner.activities.map((activity) => {
			const place = placesData[index] as ActivityPlace
			const newActivity = omit(activity, 'placeId')
			index += 1

			return { ...newActivity, place }
		})

		return { ...planner, activities }
	})

	const planner: Planner = {
		...plannerPreview,
		planners,
		style: plannerPlain.style,
	}

	return planner
}
