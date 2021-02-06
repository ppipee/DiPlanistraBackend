import express from 'express'

import { getBusinesses, getPlace, getPlaceReviewer } from 'modules/place/controllers'
import withOptionalUser from 'modules/user/middleware/withOptionalUser'

const router = express.Router()

router.get('/', withOptionalUser, getBusinesses)
router.get('/:publicId', withOptionalUser, getPlace)
router.get('/:publicId/reviews', getPlaceReviewer)

export default router
