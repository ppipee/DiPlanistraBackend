import mongoose, { Document } from 'mongoose'

import { Planner } from '../types'

import { plannerSchema } from './schemas'

type PlannerDoc = Planner & Document

export const PlannerModel = mongoose.model<PlannerDoc>('Planner', plannerSchema)
