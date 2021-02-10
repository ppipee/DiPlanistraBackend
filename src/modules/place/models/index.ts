import mongoose, { Document } from 'mongoose'

import { Category } from '../types/place'

import { categorySchema } from './schemas'

export type CategoryDoc = Category & Document
export type CategoryPlain = Category & { _id?: string }

export const CategoryModal = mongoose.model<CategoryDoc>('Category', categorySchema, 'categories')
