import mongoose from 'mongoose'

import { favoritePlaceSchema } from 'modules/me/models/schemas'

const Schema = mongoose.Schema

export const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: String,
		favoritePlaces: {
			type: [favoritePlaceSchema],
		},
	},
	{ timestamps: true },
)
