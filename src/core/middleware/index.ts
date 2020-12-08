import bodyParser from 'body-parser'
import cors from 'cors'
import { Express } from 'express'

import routes from 'routes'

import allowHeader from './allowHeader'

export default function initMiddleware(app: Express) {
	app.use('/', routes)

	app.use(cors)
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(allowHeader)
}
