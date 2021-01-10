import to from 'await-to-js'
import { Request, Response } from 'express'
import { isEmpty } from 'lodash'

import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import getPlannerPreviewData from 'modules/planner/utils/getPlannerPreviewData'
import { UserDoc } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

const getPlanners = async (req: Request, res: Response) => {
	const user = getUserData(req.user as UserDoc)

	const [error, planners] = await to<PlannerPlain[]>(Promise.resolve(PlannerModel.find({}).lean()))

	if (error || !planners || isEmpty(planners)) {
		res.status(404).send({ message: error || 'not found planners' })
	}

	const plannersData: PlannerPreview[] = planners.map((planner) => getPlannerPreviewData(planner, user))

	res.status(200).send(plannersData)
}

export default getPlanners
