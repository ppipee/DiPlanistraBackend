import express from 'express'

import { getWongnaiPlace } from 'modules/place/controllers'

const router = express.Router()

router.get('/', getWongnaiPlace)

export default router
