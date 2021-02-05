import express from 'express'

import { getFavoritePlaces, saveFavoritePlace } from 'modules/me/controllers'
import auth from 'modules/user/middleware/auth'

const router = express.Router()

router.get('/favoritePlaces', auth, getFavoritePlaces)
router.post('/favoritePlaces', auth, saveFavoritePlace)

export default router
