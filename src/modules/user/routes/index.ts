import express from 'express'
import { getUserPage } from 'modules/user/controllers'

const router = express.Router()

router.get('/', getUserPage)

export default router
