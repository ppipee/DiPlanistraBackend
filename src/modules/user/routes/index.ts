import express from 'express'

import { createUser, deleteUser, getUsers, login, getUser } from 'modules/user/controllers'

import adminAuth from '../middleware/adminAuth'
import auth from '../middleware/auth'

const router = express.Router()

router.get('/', auth, adminAuth, getUsers)
router.get('/:userId', getUser)

router.post('/login', login)
router.post('/register', createUser)

router.delete('/:userId', auth, adminAuth, deleteUser)

export default router
