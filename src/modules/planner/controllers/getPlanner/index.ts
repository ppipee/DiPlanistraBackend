import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import isAccessPlanner from 'modules/planner/utils/isAccessPlanner'
import { UserDoc } from 'modules/user/models'

const getPlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const user = req.user as UserDoc

	if (!plannerId) {
		return res.status(400).send({ message: 'required plannerId' })
	}

	const [error, planner] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (error || !planner) {
		return res.status(404).send({ message: error || 'not found planner' })
	}

	if (!planner.isPublic && !(isAccessPlanner(planner, user) && !planner.isPublic)) {
		return res.status(403).send({ message: 'this planner is not public' })
	}

	if (!isAccessPlanner(planner, user)) {
		PlannerModel.findByIdAndUpdate(plannerId, { numberOfViews: planner.numberOfViews + 1 })
	}

	const plannerData = await getPlannerData(planner, user)

	return res.status(200).send(plannerData)
}

export default getPlanner
