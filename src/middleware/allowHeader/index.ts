import { NextFunction, Request, Response } from 'express'

export default function allowHeader(req: Request, res: Response, next: NextFunction) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
	next()
}
