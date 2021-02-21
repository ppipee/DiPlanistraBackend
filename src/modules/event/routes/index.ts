import express from 'express'

import withOptionalUser from 'modules/user/middleware/withOptionalUser'

import { getEvent, getEvents } from '../controllers'

const router = express.Router()

router.get('/', withOptionalUser, getEvents)
router.get('/:eventId', withOptionalUser, getEvent)

export default router
