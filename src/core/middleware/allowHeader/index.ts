import { NextFunction, Request, Response } from 'express'

// const ALLOW_ORIGIN = ['https://di-planistra.herokuapp.com', 'http://localhost:8000']

export default function allowHeader(req: Request, res: Response, next: NextFunction) {
	res.header('Access-Control-Allow-Origin', 'https://di-planistra.herokuapp.com')
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
	next()
}
