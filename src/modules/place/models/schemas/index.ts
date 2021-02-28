import mongoose, { SchemaDefinition } from 'mongoose'

const Schema = mongoose.Schema

const domain: SchemaDefinition = {
	name: String,
	value: Number,
}

const subCategory: SchemaDefinition = {
	id: Number,
	name: String,
	internationalName: String,
	domain: {
		type: domain,
		_id: false,
	},
	numberOfBusinesses: Number,
}

const categories: SchemaDefinition = {
	id: Number,
	name: String,
	internationalName: String,
	domain: {
		type: domain,
		_id: false,
	},
	numberOfBusinesses: Number,
	categories: {
		type: [subCategory],
		_id: false,
	},
}

export const categorySchema = new Schema({
	domain: Number,
	locale: String,
	categories: {
		type: [categories],
		_id: false,
	},
})

const coordinate: SchemaDefinition = {
	lat: Number,
	lng: Number,
}

const city: SchemaDefinition = {
	id: Number,
	name: String,
	coordinate,
}

export const citySchema = new Schema({
	locale: String,
	cities: {
		type: [city],
		_id: false,
	},
})
