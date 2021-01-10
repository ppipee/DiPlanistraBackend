import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel } from 'modules/planner/models'
import isAccessPlanner from 'modules/planner/utils/isAccessPlanner'
import { UserDoc } from 'modules/user/models'

const deletePlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params

	if (!plannerId) {
		res.status(400).send({ message: 'required plannerId' })
	}

	const [error, planner] = await to(Promise.resolve(PlannerModel.findByIdAndDelete(plannerId)))

	if (error || !planner) {
		res.status(404).send({ message: error || 'not found planner' })
	}

	if (!isAccessPlanner(req.user as UserDoc, planner)) {
		res.status(403).send({ message: "you don't have permission to delete planner" })
	}

	res.status(200).send({ message: 'delete success' })
}

export default deletePlanner
