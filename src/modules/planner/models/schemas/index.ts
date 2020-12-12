import mongoose, { SchemaDefinition } from 'mongoose'

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
	writerId: String,
	rating: Number,
	isPublic: Boolean,
	planner: [plannerInfo],
	style: plannerStyle,
})
