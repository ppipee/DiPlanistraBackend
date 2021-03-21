import { ActivityPlan } from 'modules/planner/types'

import getDistance from '../getDistance'

export default async function activityDistance(originActivity: ActivityPlan, destinationActivity: ActivityPlan) {
	const activity = { ...originActivity }
	const { distance, duration } = await getDistance(
		originActivity.place.coordinate,
		destinationActivity.place.coordinate,
	)

	activity.distance = distance?.text
	activity.duration = duration?.text

	return activity
}
