import express from 'express'

import { getCategories, getCities } from 'modules/place/controllers'
import placeRoutes from 'modules/place/routes'
import plannerRoutes from 'modules/planner/routes'
import userRoutes from 'modules/user/routes'

import { PLACES_PATH, PLANNER_PATH, USERS_PATH } from './constants'

const router = express.Router()

router.get('/', (req, res) => res.send('Di Planistra Server'))

router.use(PLACES_PATH, placeRoutes)
router.use(USERS_PATH, userRoutes)
router.use(PLANNER_PATH, plannerRoutes)

const subRouter = express.Router()

subRouter.get('/cities', getCities)
subRouter.get('/categories', getCategories)

router.use('/', subRouter)

export default router
