import mongoose, { Document } from 'mongoose'

import { Planner } from '../types'

import { plannerSchema } from './schemas'

export type PlannerDoc = Omit<Planner, 'writer'> & { writerId: String } & Document

export const PlannerModel = mongoose.model<PlannerDoc>('Planner', plannerSchema)
