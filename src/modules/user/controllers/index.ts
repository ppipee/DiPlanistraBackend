import to from 'await-to-js'
import { NextFunction, Request, Response } from 'express'
import { isEmpty } from 'lodash'
import passport from 'passport'

import { SALT_ROUND } from 'core/auth/constants'
import hashBcrypt from 'core/auth/hashBcrypt'

import { UserModel } from 'modules/user/models'

import { Role } from '../types'
import getUserData from '../utils/getUserData'
import getUserWithToken from '../utils/getUserWithToken'

export const createUser = async (req: Request, res: Response) => {
	const { password } = req.body

	const hashingPassword = hashBcrypt(password, SALT_ROUND)

	const databaseUser = new UserModel({
		...req.body,
		password: hashingPassword,
		role: Role.Traveler,
	})

	await databaseUser.save()

	const [user, token] = getUserWithToken(databaseUser, process.env.JWT_SECRET)

	res.status(201).send({ data: { user, token } })
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('local', { session: false }, (err, databaseUser, info) => {
		if (err) return res.send({ message: err })

		if (databaseUser) {
			const [user, token] = getUserWithToken(databaseUser, process.env.JWT_SECRET)

			return res.status(200).send({ data: { user, token } })
		} else {
			return res.status(422).send(info)
		}
	})(req, res, next)
}

export const getUsers = async (req: Request, res: Response) => {
	const [error, users] = await to(Promise.resolve(UserModel.find({})))
	const usersData = users.map((user) => getUserData(user))

	if (error || !users || isEmpty(users)) {
		res.status(404).send({ message: error })
	}

	res.status(200).send(usersData)
}

export const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params

	if (!userId) {
		res.status(400).send({ message: 'required userId' })
	}

	const [error, user] = await to(Promise.resolve(UserModel.findById(userId)))

	if (error || !user) {
		res.status(404).send({ message: error })
	}

	res.status(200).send(getUserData(user))
}

export const deleteUser = async (req: Request, res: Response) => {
	const { userId } = req.params

	if (!userId) {
		res.status(400).send({ message: 'required userId' })
	}

	const [error, user] = await to(Promise.resolve(UserModel.findByIdAndDelete(userId)))

	if (error || !user) {
		res.status(404).send({ message: error })
	}

	res.status(200).send({ message: 'delete success' })
}
