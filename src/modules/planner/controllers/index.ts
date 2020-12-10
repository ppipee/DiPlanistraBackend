import { Request, Response } from 'express'

export const getPlanner = (req: Request, res: Response) => {
	const plannerId = req.query.id

	return res.send(`planner: ${plannerId}`)
}

export const getPlanners = (req: Request, res: Response) => {
	return res.send('planners')
}

export const updatePlanner = (req: Request, res: Response) => {
	return res.send('update planner')
}

export const createPlanner = (req: Request, res: Response) => {
	return res.send('create planner')
}
