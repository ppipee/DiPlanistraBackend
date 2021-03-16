/* eslint-disable import/no-cycle */
import { Planner } from './types'

export const PlannerState = {
	Plan: 1,
	Travel: 2,
} as const

export const DEFAULT_PLANNER: Planner = {
	name: undefined,
	startDate: undefined,
	endDate: undefined,
	dateLength: 1,
	writer: undefined,
	rating: 0,
	isPublic: false,
	isOwner: undefined,
	planners: [],
	style: {
		coverPhoto: undefined,
		showCover: true,
	},
	numberOfBookmarks: 0,
	numberOfViews: 0,
	isBookmark: false,
	state: PlannerState.Plan,
}
