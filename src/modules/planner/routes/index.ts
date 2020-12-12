import express from 'express'

import auth from 'modules/user/middleware/auth'

import { createPlanner, deletePlanner, getPlanner, getPlanners, updatePlanner } from '../controllers'

const router = express.Router()

router.get('/:plannerId', auth, getPlanner)
router.get('/', auth, getPlanners)

router.delete('/:plannerId', auth, deletePlanner)

router.post('/', auth, createPlanner)
router.put('/:plannerId', auth, updatePlanner)

export default router
