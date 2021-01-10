import mongoose, { Document } from 'mongoose'

import { Planner } from '../types'

import { plannerSchema } from './schemas'

export type PlannerDoc = Omit<Planner, 'writer'> & { writerId: string } & Document
export type PlannerPlain = Omit<Planner, 'writer'> & { writerId: string; _id?: string }

export const PlannerModel = mongoose.model<PlannerDoc>('Planner', plannerSchema)
