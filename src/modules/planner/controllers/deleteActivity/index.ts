import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'

const deleteActivity = async (req: Request, res: Response) => {
	const { plannerId, activityId } = req.params
	const { day } = req.query

	if (!plannerId || !activityId || !day) {
		return res.status(400).send({ message: 'plannerId or activityId or day was undefined' })
	}

	const [gettingError, plannerPlain] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (gettingError) {
		return res.send(gettingError)
	}

	const planners = [...plannerPlain.planners]
	const plannerInfoIndex = planners.findIndex((planner) => planner.day === +day)

	const plannerInfo = planners[plannerInfoIndex]
	const activityIndex = plannerInfo.activities.findIndex((activity) => (activity._id as unknown) === activityId)

	plannerInfo.activities.splice(activityIndex, 1)

	await to<PlannerPlain>(
		Promise.resolve(PlannerModel.findByIdAndUpdate(plannerId, { planners }, { returnOriginal: false })),
	)

	return res.status(200).send({ message: 'delete success' })
}

export default deleteActivity
