import mongoose, { SchemaDefinition } from 'mongoose'

import { favoritePlaceSchema } from 'modules/me/models/schemas'

const Schema = mongoose.Schema

const activityHour: SchemaDefinition = {
	from: String,
	to: String,
}

const activityPlan: SchemaDefinition = {
	hour: { type: activityHour, _id: false },
	place: { type: favoritePlaceSchema, _id: false },
	memo: String,
	distance: String,
	duration: String,
}

const plannerInfo: SchemaDefinition = {
	day: Number,
	title: String,
	description: String,
	activities: {
		type: [activityPlan],
		index: true,
	},
}

const plannerStyle: SchemaDefinition = {
	coverPhoto: String,
	showCover: Boolean,
}

const writer: SchemaDefinition = {
	id: String,
	name: String,
	email: String,
	role: String,
}

export const plannerSchema = new Schema(
	{
		name: String,
		startDate: Date,
		endDate: Date,
		dateLength: Number,
		writer: {
			type: writer,
			_id: false,
		},
		rating: Number,
		isPublic: Boolean,
		planners: {
			type: [plannerInfo],
			index: true,
			_id: false,
		},
		style: { type: plannerStyle, _id: false },
		numberOfBookmarks: Number,
		numberOfViews: Number,
		state: Number,
	},
	{ timestamps: true },
)
