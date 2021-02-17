import express from 'express'

import { getEvent, getEvents } from '../controllers'

const router = express.Router()

router.get('/', getEvents)
router.get('/:eventId', getEvent)

export default router
