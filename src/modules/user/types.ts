// eslint-disable-next-line import/no-cycle
import { ActivityPlace } from 'modules/planner/types'

export interface User {
	id?: string
	email: string
	name: string
	password?: string
	role: Role
	favoritePlaces?: ActivityPlace[]
	bookmarks?: string[] // plannerIds
	events?: string[] // eventId
	placeCategories?: number[]
}

export type UserResponse = Omit<User, 'password' | 'favoritePlaces' | 'bookmarks' | 'events' | 'categories'>

export enum Role {
	Traveler = 'traveler',
	Admin = 'admin',
}
