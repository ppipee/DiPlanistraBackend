import to from 'await-to-js'
import { Request, Response } from 'express'
import { isEmpty } from 'lodash'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import getPlannerPreviewData from 'modules/planner/utils/getPlannerPreviewData'
import { UserDoc } from 'modules/user/models'

const getPlanners = async (req: Request, res: Response) => {
	const user = req.user as UserDoc

	const [error, planners] = await to<PlannerPlain[]>(Promise.resolve(PlannerModel.find({}).lean()))

	if (error || !planners || isEmpty(planners)) {
		return res.status(404).send({ message: error || 'not found planners' })
	}
	const plannersData: PlannerPreview[] = planners.map((planner) => getPlannerPreviewData(planner, user))

	return res.status(200).send(plannersData)
}

export default getPlanners
