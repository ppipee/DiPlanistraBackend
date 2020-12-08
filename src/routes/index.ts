import express from 'express'

import placeRoutes from 'modules/place/routes'
import userRoutes from 'modules/user/routes'

import { PLACES_PATH, USERS_PATH } from './constants'

const router = express.Router()

router.use(PLACES_PATH, placeRoutes)
router.use(USERS_PATH, userRoutes)

export default router
