import express from 'express'

import {
	getFavoritePlaces,
	getMe,
	saveFavoritePlace,
	deleteFavoritePlace,
	bookmarkTrip,
	getBookmarks,
	unlikeTrip,
} from 'modules/me/controllers'
import auth from 'modules/user/middleware/auth'

const router = express.Router()

router.get('/', getMe)

router.get('/favoritePlaces', auth, getFavoritePlaces)
router.post('/favoritePlaces', auth, saveFavoritePlace)
router.delete('/favoritePlaces/:publicId', auth, deleteFavoritePlace)

router.get('/bookmarks', auth, getBookmarks)
router.post('/bookmarks', auth, bookmarkTrip)
router.delete('/bookmarks/:plannerId', auth, unlikeTrip)

export default router
