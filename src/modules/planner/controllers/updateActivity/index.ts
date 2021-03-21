import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { EditActivity } from 'modules/planner/types'
import activitiesDistance from 'modules/planner/utils/activitiesDistance'
import getActivityPlace from 'modules/planner/utils/getActivityPlace'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import sortActivities from 'modules/planner/utils/sortActivities'
import { UserDoc } from 'modules/user/models'

const updateActivity = async (req: Request, res: Response) => {
	const { plannerId, activityId } = req.params
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

	const planners = [...plannerPlain.planners]
	const plannerInfoIndex = planners.findIndex((planner) => planner.day === +day)

	const plannerInfo = planners[plannerInfoIndex]
	const activityIndex = plannerInfo.activities.findIndex((activity) => activity._id.toString() === activityId)

	if (activityIndex < 0) {
		return res.send(404).send({ message: 'activity not found' })
	}

	const activity = plannerInfo.activities[activityIndex]
	const isNewPlace = activityData.placeId === activity.place?.publicId
	const activityPlace = isNewPlace ? activity.place : getActivityPlace(activityData.placeId, user.favoritePlaces)

	activity.place = activityPlace

	planners[plannerInfoIndex].activities[activityIndex] = {
		...activity,
		...activityData,
	}

	sortActivities(planners[plannerInfoIndex].activities)

	if (isNewPlace || !activity.distance) {
		planners[plannerInfoIndex].activities = await activitiesDistance(
			planners[plannerInfoIndex].activities,
			activityData.placeId,
		)
	}

	const [error, plannerPlainUpdated] = await to<PlannerPlain>(
		Promise.resolve(PlannerModel.findByIdAndUpdate(plannerId, { planners }, { returnOriginal: false }).lean()),
	)

	if (error || !plannerPlainUpdated) {
		return res.send({ message: gettingError || 'cannot create activity' })
	}

	const plannerData = await getPlannerData(plannerPlainUpdated, user)

	return res.send(plannerData)
}

export default updateActivity
