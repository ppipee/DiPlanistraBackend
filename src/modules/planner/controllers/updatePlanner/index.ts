import to from 'await-to-js'
import { Request, Response } from 'express'

import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'

import { PlannerDoc, PlannerModel } from 'modules/planner/models'
import { Planner } from 'modules/planner/types'
import getActivitiesMapper from 'modules/planner/utils/getActivitiesMappar'
import getPlannerData from 'modules/planner/utils/getPlannerData'
import isAccessPlanner from 'modules/planner/utils/isAccessPlanner'
import { UserDoc } from 'modules/user/models'

const updatePlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const { name, startDate, endDate, dateLength, rating, isPublic, planners, style, state }: Planner = req.body
	const user = req.user as UserDoc

	if (!plannerId) {
		return res.status(400).send({ message: 'required plannerId' })
	}
	const [getError, plannerPlain] = await to(Promise.resolve(PlannerModel.findById(plannerId).lean()))

	if (getError || !plannerPlain) {
		return res.status(404).send({ message: getError || 'not found planner' })
	}

	const activitiesMapper = getActivitiesMapper(plannerPlain)
	const plannersUpdate = (planners || []).map((planner) => ({
		...planner,
		activities: activitiesMapper[planner.day],
	}))

	const plannerUpdate = filterObjectExistingValues({
		name,
		startDate,
		endDate,
		dateLength,
		rating,
		isPublic,
		style,
		state,
		planners: plannersUpdate,
	})

	const [error, plannerUpdated] = await to(
		Promise.resolve(PlannerModel.findByIdAndUpdate(plannerId, plannerUpdate, { returnOriginal: false }).lean()),
	)

	if (error || !plannerUpdated) {
		return res.status(404).send({ message: error || 'not found planner' })
	}

	if (!isAccessPlanner(plannerUpdated, req.user as UserDoc)) {
		return res.status(403).send({ message: "you don't have permission to edit planner" })
	}

	const plannerData = await getPlannerData(plannerUpdated, user)

	return res.status(200).send(plannerData)
}

export default updatePlanner
