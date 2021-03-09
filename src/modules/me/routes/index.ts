import express from 'express'

import {
	getFavoritePlaces,
	getMe,
	saveFavoritePlace,
	deleteFavoritePlace,
	bookmarkTrip,
	getBookmarks,
	unlikeTrip,
	getFavoriteEvents,
	saveEvent,
	unlikeEvent,
	savePlaceCategories,
	newPlaceCategories,
	getFavorite,
} from 'modules/me/controllers'
import auth from 'modules/user/middleware/auth'

const router = express.Router()

router.get('/', getMe)

router.get('/favorite', auth, getFavorite)

router.get('/favoritePlaces', auth, getFavoritePlaces)
router.post('/favoritePlaces', auth, saveFavoritePlace)
router.delete('/favoritePlaces/:publicId', auth, deleteFavoritePlace)

router.get('/bookmarks', auth, getBookmarks)
router.post('/bookmarks', auth, bookmarkTrip)
router.delete('/bookmarks/:plannerId', auth, unlikeTrip)

router.get('/events', auth, getFavoriteEvents)
router.post('/events', auth, saveEvent)
router.delete('/events/:eventId', auth, unlikeEvent)

router.post('/categories', auth, savePlaceCategories)
router.put('/categories', auth, newPlaceCategories)

export default router
