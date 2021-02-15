import { ActivityPlan } from 'modules/planner/types'

import activityDistance from '../activityDistance'

// activities should sort before set distance
export default async function activitiesDistance(activities: ActivityPlan[], targetPublicId?: string) {
	if (targetPublicId) {
		const newActivities = [...activities]
		const index = activities.findIndex((activity) => activity.place.publicId === targetPublicId)

		if (index + 1 < activities.length) {
			const newActivity = await activityDistance(activities[index], activities[index + 1])
			newActivities[index] = newActivity
		}

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
