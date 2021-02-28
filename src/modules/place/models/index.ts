import mongoose, { Document, mongo } from 'mongoose'

import { Cities } from '../types/city'
import { Category } from '../types/place'

import { categorySchema, citySchema } from './schemas'

export type CategoryDoc = Category & Document
export type CategoryPlain = Category & { _id?: string }

export const CategoryModel = mongoose.model<CategoryDoc>('Category', categorySchema, 'categories')

export type CityDoc = Cities & Document
export type CityPlain = Cities & { _id?: string }
export const CityModel = mongoose.model<CityDoc>('Cities', citySchema, 'cities')
