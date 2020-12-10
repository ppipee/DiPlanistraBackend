import mongoose, { SchemaDefinition } from 'mongoose'

import { userSchema } from 'modules/user/models/schemas'

const Schema = mongoose.Schema

const activityHour: SchemaDefinition = {
	from: String,
	to: String,
}

const activityPlan: SchemaDefinition = {
	hour: activityHour,
	placeId: String,
}

const plannerInfo: SchemaDefinition = {
	day: Number,
	title: String,
	description: String,
	activities: [activityPlan],
}

const plannerStyle: SchemaDefinition = {
	coverPhoto: String,
	showCover: Boolean,
}

export const plannerSchema = new Schema({
	name: String,
	startDate: Date,
	endDate: Date,
	dateLength: Number,
	writer: userSchema,
	rating: Number,
	public: Boolean,
	planner: [plannerInfo],
	style: plannerStyle,
})
