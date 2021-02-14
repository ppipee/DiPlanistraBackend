import express from 'express'

import { getTrips } from 'modules/search/controllers'
import withOptionalUser from 'modules/user/middleware/withOptionalUser'

const router = express.Router()

router.get('/trips', withOptionalUser, getTrips)

export default router
