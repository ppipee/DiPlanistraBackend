import { Request, Response } from 'express'
import { range } from 'lodash'

import getDifferentTime from 'common/utils/getDifferentTime/index'

import { DEFAULT_PLANNER } from 'modules/planner/constants'
import { PlannerModel, PlannerPlain } from 'modules/planner/models'
import { PlannerInfo } from 'modules/planner/types'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import { UserDoc } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

const createPlanner = async (req: Request, res: Response) => {
	const { name, startDate, endDate } = req.body

	if (!name || !startDate || !endDate) {
		return res.status(400).send({ message: 'required name, startDate and endDate' })
	}

	const user = req.user as UserDoc
	const dateLength = getDifferentTime(startDate, endDate) + 1

	const plannerInfo: PlannerInfo[] = range(dateLength).map((day) => ({
		day: day + 1,
		activities: [],
	}))

	const planner = new PlannerModel({
		...DEFAULT_PLANNER,
		name,
		startDate,
		endDate,
		dateLength,
		writer: getUserData(user),
		planners: plannerInfo,
	})

	await planner.save()

	const plannerData = await getPlannerData(planner as PlannerPlain, user)

	return res.status(201).send(plannerData)
}

export default createPlanner
