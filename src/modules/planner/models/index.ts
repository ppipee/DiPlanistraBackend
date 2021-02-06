import mongoose, { Document } from 'mongoose'

import { Planner } from '../types'

import { plannerSchema } from './schemas'

export type PlannerDoc = Planner & Document
export type PlannerPlain = Planner & { _id?: string }

export const PlannerModel = mongoose.model<PlannerDoc>('Planner', plannerSchema)
