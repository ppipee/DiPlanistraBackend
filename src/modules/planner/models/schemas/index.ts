import mongoose, { SchemaDefinition } from 'mongoose'

const Schema = mongoose.Schema

const activityHour: SchemaDefinition = {
	from: String,
	to: String,
}

const activityPlan: SchemaDefinition = {
	hour: { type: activityHour, _id: false },
	placeId: String,
	memo: String,
	distance: String,
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

export const plannerSchema = new Schema(
	{
		name: String,
		startDate: Date,
		endDate: Date,
		dateLength: Number,
		writerId: String,
		rating: Number,
		isPublic: Boolean,
		planners: {
			type: [plannerInfo],
			index: true,
			_id: false,
		},
		style: { type: plannerStyle, _id: false },
	},
	{ timestamps: true },
)
