import express from 'express'

import eventRoutes from 'modules/event/routes'
import meRoutes from 'modules/me/routes'
import { getCategories, getCities } from 'modules/place/controllers'
import placeRoutes from 'modules/place/routes'
import plannerRoutes from 'modules/planner/routes'
import searchRoutes from 'modules/search/routes'
import userRoutes from 'modules/user/routes'

import { EVENTS_PATH, ME_PATH, PLACES_PATH, PLANNER_PATH, SEARCH_PATH, USERS_PATH } from './constants'

const router = express.Router()

router.get('/', (req, res) => res.send('Di Planistra Server'))

router.use(PLACES_PATH, placeRoutes)
router.use(USERS_PATH, userRoutes)
router.use(PLANNER_PATH, plannerRoutes)
router.use(ME_PATH, meRoutes)
router.use(SEARCH_PATH, searchRoutes)
router.use(EVENTS_PATH, eventRoutes)

const subRouter = express.Router()

subRouter.get('/cities', getCities)
subRouter.get('/categories', getCategories)

router.use('/', subRouter)

export default router
