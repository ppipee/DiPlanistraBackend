import { omit } from 'lodash'

import { PlannerPlain } from 'modules/planner/models'
import { ActivityPlace, Planner } from 'modules/planner/types'
import { UserDoc } from 'modules/user/models'

import getActivityPlace from '../getActivityPlace'
import getPlannerPreviewData from '../getPlannerPreviewData'

export default async function getPlannerData(plannerPlain: PlannerPlain, user: UserDoc): Promise<Planner> {
	const plannerPreview = getPlannerPreviewData(plannerPlain, user)

	const activitiesMapper = plannerPlain.planners.reduce(
		(mapper, planner) => [...mapper, ...planner.activities.map((activity) => activity.placeId)],
		[] as string[],
	) // [placeId,...]

	const placesData = await Promise.all(
		activitiesMapper.map((publicId) => Promise.resolve(getActivityPlace(publicId, user.favoritePlaces))),
	)

	let index = 0
	const planners = plannerPlain.planners.map((planner) => {
		const activities = planner.activities.map((activity) => {
			const place = placesData[index] as ActivityPlace

			const id = activity._id
			const newActivity = omit(activity, ['placeId', '_id'])

			index += 1

			return { ...newActivity, place, id }
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
