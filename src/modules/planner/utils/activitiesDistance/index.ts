import { ActivityPlan } from 'modules/planner/types'

import activityDistance from '../activityDistance'

// activities should sort before set distance

export default async function activitiesDistance(activities: ActivityPlan[], targetPublicId?: string) {
	if (targetPublicId) {
		const newActivities = [...activities]

		await Promise.all(
			activities.map(async (activity, index) => {
				if (index !== 0) {
					const newActivity = await activityDistance(activity, activities[index - 1])
					newActivities[index] = newActivity
				} else {
					activity.distance = null
					activity.duration = null
					newActivities[index] = activity
				}
			}),
		)

		return newActivities
	}

	const newActivities = await Promise.all(
		activities.map((activity, index) => {
			if (index + 1 >= activities.length) return activity

			return activityDistance(activity, activities[index + 1])
		}),
	)

	return newActivities
}
