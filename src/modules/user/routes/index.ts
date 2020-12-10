import express from 'express'

import { createUser, deleteUser, getUsers, login, getUser } from 'modules/user/controllers'

import adminAuth from '../middleware/adminAuth'
import auth from '../middleware/auth'

const router = express.Router()

router.get('/', auth, adminAuth, getUsers)
router.get('/:userId', getUser)
router.post('/register', createUser)
router.post('/login', login)
router.delete('/:userId', deleteUser)

export default router
