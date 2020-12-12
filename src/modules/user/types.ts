import { Document } from 'mongoose'

export interface User {
	id?: string
	email: string
	name: string
	password?: string
	role: Role
}

export type UserResponse = Omit<User, 'password'>

export enum Role {
	Traveler = 'traveler',
	Admin = 'admin',
}