import dotenv from 'dotenv'
import express from 'express'

import initDatabase from 'core/database/utils/initDatabase'
import initMiddleware from 'core/middleware'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

initDatabase()
initMiddleware(app)

app.listen(PORT, () => {
	console.log(`Server run listening on port ${PORT}`)
})
