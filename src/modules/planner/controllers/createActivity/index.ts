import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { EditActivity } from 'modules/planner/types'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import { UserDoc } from 'modules/user/models'

const createActivity = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const { day } = req.query
	const activity: EditActivity = req.body
	const user = req.user as UserDoc

	if (!plannerId) {
		return res.status(400).send({ message: 'required plannerId' })
	}

	const [gettingError, plannerPlain] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (gettingError || !plannerPlain) {
		return res.status(404).send({ message: gettingError || 'not found planner' })
	}

	const plannerInfoIndex = plannerPlain.planners.findIndex((planner) => planner.day === +day)

	plannerPlain.planners[plannerInfoIndex].activities.push(activity)

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
