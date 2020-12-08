import { Request, Response } from 'express'

export const getUserPage = (req: Request, res: Response) => {
	return res.send('Hello Expressjs and router and get controller')
}
