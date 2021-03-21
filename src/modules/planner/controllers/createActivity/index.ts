import to from 'await-to-js'
import { Request, Response } from 'express'
import { omit } from 'lodash'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { EditActivity } from 'modules/planner/types'
import activitiesDistance from 'modules/planner/utils/activitiesDistance'
import getActivityPlace from 'modules/planner/utils/getActivityPlace'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import sortActivities from 'modules/planner/utils/sortActivities'
import { UserDoc } from 'modules/user/models'

const createActivity = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const { day } = req.query
	const activityData: EditActivity = req.body
	const user = req.user as UserDoc

	if (!plannerId || !activityData.hour || !activityData.placeId) {
		return res.status(400).send({ message: 'required plannerId, hour, placeID' })
	}

	const [gettingError, plannerPlain] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (gettingError || !plannerPlain) {
		return res.status(404).send({ message: gettingError || 'not found planner' })
	}

	const plannerInfoIndex = plannerPlain.planners.findIndex((planner) => planner.day === +day)
	const plannerInfo = plannerPlain.planners[plannerInfoIndex]

	const activity = {
		...omit(activityData, 'placeId'),
		place: getActivityPlace(activityData.placeId, user.favoritePlaces),
	}
	plannerInfo.activities.push(activity)

	sortActivities(plannerInfo.activities)

	plannerInfo.activities = await activitiesDistance(plannerInfo.activities, activityData.placeId)

	const [error, plannerPlainUpdated] = await to<PlannerPlain>(
		Promise.resolve(
			PlannerModel.findOneAndUpdate(
				{ _id: plannerId },
				{ planners: plannerPlain.planners },
				{ returnOriginal: false },
			).lean(),
		),
	)

	if (error || !plannerPlainUpdated) {
		return res.send({ message: gettingError || 'cannot create activity' })
	}

	const plannerData = await getPlannerData(plannerPlainUpdated, user)

	return res.status(201).send(plannerData)
}

export default createActivity
