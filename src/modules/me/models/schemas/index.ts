import mongoose, { SchemaDefinition } from 'mongoose'

const Schema = mongoose.Schema

const coordinate: SchemaDefinition = {
	lat: Number,
	lng: Number,
}

const basicPhoto: SchemaDefinition = {
	photoId: String,
	url: String,
	contentUrl: String,
	description: String,
	photoUrl: String,
	thumbnailUrl: String,
	smallUrl: String,
	largeUrl: String,
}

const priceRange: SchemaDefinition = {
	name: String,
	value: Number,
}

const subCategory: SchemaDefinition = {
	id: Number,
	name: String,
}

const category: SchemaDefinition = {
	id: Number,
	name: String,
	categories: {
		type: [subCategory],
		_id: false,
	},
}

const workingHourStatus: SchemaDefinition = {
	open: Boolean,
	message: String,
	closingSoon: String,
}

const entryFee: SchemaDefinition = {
	adult: Number,
	children: Number,
	currency: String,
	feeCondition: String || Number,
}

const domain: SchemaDefinition = {
	name: String,
	value: Number,
}

export const favoritePlaceSchema: SchemaDefinition = {
	publicId: String,
	name: String,
	rating: Number,
	coordinate: {
		type: coordinate,
		_id: false,
	},
	defaultPhoto: {
		type: basicPhoto,
		_id: false,
	},
	mainPhoto: {
		type: basicPhoto,
		_id: false,
	},
	priceRange: {
		type: priceRange,
		_id: false,
	},
	categories: {
		type: [category],
		_id: false,
	},
	workingHoursStatus: {
		type: workingHourStatus,
		_id: false,
	},
	entryFee: {
		type: entryFee,
		_id: false,
	},
	domain: {
		type: domain,
		_id: false,
	},
	isFavorite: Boolean,
	numberOfReviews: Number,
}
