import mongoose, { Document } from 'mongoose'

import { ActivityPlace } from 'modules/planner/types'

export type FavoritePlacePlain = ActivityPlace & { _id?: string }
