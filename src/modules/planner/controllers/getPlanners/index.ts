import to from 'await-to-js'
import { Request, Response } from 'express'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import getPlannerPreviewData from 'modules/planner/utils/getPlannerPreviewData'
import { UserDoc } from 'modules/user/models'

const getPlanners = async (req: Request, res: Response) => {
	const user = req.user as UserDoc

	const [error, planners] = await to<PlannerPlain[]>(
		Promise.resolve(PlannerModel.find({ 'writer.id': user._id }).lean()),
	)

	if (error) {
		return res.status(502).send({ message: error.message })
	}
	const plannersData: PlannerPreview[] = planners.map((planner) => getPlannerPreviewData(planner, user))

	return res.status(200).send(plannersData)
}

export default getPlanners
