import { isEmpty } from 'lodash'

import { ActivityPlan } from 'modules/planner/types'

function convertHourToNumber(hour: string) {
	return Number(hour.replace(':', '')) // 12:10 => 1210
}

export default function sortActivities(activities: ActivityPlan[]) {
	if (isEmpty(activities)) return [...activities]

	return activities.sort((a, b) => convertHourToNumber(a.hour.from) - convertHourToNumber(b.hour.from))
}
