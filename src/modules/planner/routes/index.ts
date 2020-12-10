import express from 'express'

import { getPlanner } from '../controllers'

const router = express.Router()

router.get('/', getPlanner)

export default router
