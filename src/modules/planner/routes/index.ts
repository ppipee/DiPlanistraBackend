import express from 'express'

import auth from 'modules/user/middleware/auth'
import withOptionalUser from 'modules/user/middleware/withOptionalUser'

import {
	createActivity,
	createPlanner,
	deleteActivity,
	deleteDayPlanner,
	deletePlanner,
	getPlanner,
	getPlanners,
	updateActivity,
	updatePlanner,
} from '../controllers'

const router = express.Router()

router.get('/:plannerId', withOptionalUser, getPlanner)
router.get('/', auth, getPlanners)

router.delete('/:plannerId', auth, deletePlanner)
router.delete('/:plannerId', auth, deleteDayPlanner)

router.post('/', auth, createPlanner)
router.put('/:plannerId', auth, updatePlanner)

router.post('/:plannerId/activities', auth, createActivity)
router.put('/:plannerId/activities/:activityId', auth, updateActivity)
router.delete('/:plannerId/activities/:activityId', auth, deleteActivity)

export default router
