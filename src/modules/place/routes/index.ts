import express from 'express'

import { getBusinesses, getPlace, getPlaceReviewer } from 'modules/place/controllers'

const router = express.Router()

router.get('/', getBusinesses)
router.get('/:publicId', getPlace)
router.get('/:publicId/reviews', getPlaceReviewer)

export default router
