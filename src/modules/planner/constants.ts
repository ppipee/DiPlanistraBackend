import { Planner } from './types'

export const DEFAULT_PLANNER: Planner = {
	name: undefined,
	startDate: undefined,
	endDate: undefined,
	dateLength: 1,
	writer: undefined,
	rating: 0,
	isPublic: false,
	planners: [],
	style: {
		coverPhoto: undefined,
		showCover: true,
	},
}
