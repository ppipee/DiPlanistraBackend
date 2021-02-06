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
		res.status(400).send({ message: 'required plannerId' })
	}

	const [error, planner] = await to<PlannerPlain>(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (error || !planner) {
		res.status(404).send({ message: error || 'not found planner' })
	}

	if (!isAccessPlanner(req.user as UserDoc, planner)) {
		res.status(403).send({ message: 'this planner is not public' })
	}

	const plannerData = await getPlannerData(planner, user)

	res.status(200).send(plannerData)
}

export default getPlanner
