// import mongoose from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'

import initMiddleware from 'core/middleware'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

initMiddleware(app)

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`server run listening on port ${PORT}`)
})
