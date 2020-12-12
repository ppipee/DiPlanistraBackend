import to from 'await-to-js'
import { Request, Response } from 'express'
import { isEmpty, range } from 'lodash'

import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'
import getDifferentTime from 'common/utils/getDifferentTime/index'

import { UserDoc } from 'modules/user/models'
import getUserData from 'modules/user/utils/getUserData'

import { DEFAULT_PLANNER } from '../constants'
import { PlannerDoc, PlannerModel } from '../models'
import { Planner, PlannerInfo } from '../types'
import getPlannerData from '../utils/getPlannerData'
import isAccessPlanner from '../utils/isAccessPlanner'

export const createPlanner = async (req: Request, res: Response) => {
	const { name, startDate, endDate } = req.body

	if (!name || !startDate || !endDate) {
		res.status(400).send({ message: 'required name, startDate and endDate' })
	}

	const user = getUserData(req.user as UserDoc)
	const dateLength = getDifferentTime(startDate, endDate)

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
		writerId: user.id,
		planner: plannerInfo,
	})

	await planner.save()

	const plannerData = getPlannerData(planner, user)

	return res.status(201).send({
		data: plannerData,
	})
}

export const getPlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const user = getUserData(req.user as UserDoc)

	if (!plannerId) {
		res.status(400).send({ message: 'required plannerId' })
	}

	const [error, planner] = await to(Promise.resolve(PlannerModel.findById(plannerId)))

	if (error || !planner) {
		res.status(404).send({ message: error || 'not found planner' })
	}

	if (!isAccessPlanner(req.user as UserDoc, planner)) {
		res.status(403).send({ message: 'this planner is not public' })
	}

	res.status(200).send({ data: getPlannerData(planner, user) })
}

export const getPlanners = async (req: Request, res: Response) => {
	const user = getUserData(req.user as UserDoc)

	const [error, planners] = await to(Promise.resolve(PlannerModel.find({})))

	if (error || !planners || isEmpty(planners)) {
		res.status(404).send({ message: error || 'not found planners' })
	}

	const plannersData = planners.map((planner) => getPlannerData(planner, user))

	res.status(200).send({ data: plannersData })
}

export const updatePlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const { name, startDate, endDate, dateLength, rating, isPublic, planner, style }: Planner = req.body
	const user = getUserData(req.user as UserDoc)

	const plannerData = filterObjectExistingValues({
		name,
		startDate,
		endDate,
		dateLength,
		rating,
		isPublic,
		planner,
		style,
	})

	if (!plannerId) {
		res.status(400).send({ message: 'required plannerId' })
	}

	const [error, newPlanner] = await to(Promise.resolve(PlannerModel.findByIdAndUpdate(plannerId, plannerData)))

	if (error || !newPlanner) {
		res.status(404).send({ message: error || 'not found planner' })
	}

	if (!isAccessPlanner(req.user as UserDoc, newPlanner)) {
		res.status(403).send({ message: "you don't have permission for edit planner" })
	}

	res.status(200).send({ data: getPlannerData({ ...newPlanner, ...plannerData } as PlannerDoc, user) })
}

export const deletePlanner = async (req: Request, res: Response) => {
	const { plannerId } = req.params
	const user = getUserData(req.user as UserDoc)

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
