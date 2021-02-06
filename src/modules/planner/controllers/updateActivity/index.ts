import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { EditActivity } from 'modules/planner/types'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import { UserDoc } from 'modules/user/models'

const updateActivity = async (req: Request, res: Response) => {
	const { plannerId, activityId } = req.params
	const { day } = req.query
	const activityData: EditActivity = req.body
	const user = req.user as UserDoc

	if (!plannerId) {
		res.status(400).send({ message: 'required plannerId' })
	}

	const [gettingError, plannerPlain] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (gettingError || !plannerPlain) {
		res.status(404).send({ message: gettingError || 'not found planner' })
	}

	const planners = [...plannerPlain.planners]
	const plannerInfoIndex = planners.findIndex((planner) => planner.day === +day)

	const plannerInfo = planners[plannerInfoIndex]
	const activityIndex = plannerInfo.activities.findIndex((activity) => activity._id.toString() === activityId)

	if (activityIndex < 0) {
		res.send(404).send({ message: 'actvity not found' })
	}

	const activity = plannerInfo.activities[activityIndex]
	planners[plannerInfoIndex].activities[activityIndex] = {
		...activity,
		...activityData,
	}

	const [error, plannerPlainUpdated] = await to<PlannerPlain>(
		Promise.resolve(PlannerModel.findByIdAndUpdate(plannerId, { planners }, { returnOriginal: false }).lean()),
	)

	if (error || !plannerPlainUpdated) {
		res.send({ message: gettingError || 'cannot create activity' })
	}

	const plannerData = await getPlannerData(plannerPlainUpdated, user)

	res.status(201).send(plannerData)
}

export default updateActivity
