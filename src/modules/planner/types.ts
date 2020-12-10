import { BasicPhoto, LatLng } from 'modules/place/types/common'

export interface InitPlanner {
	name: string
	startDate: Date
	endDate: Date
}

export interface Planner extends InitPlanner {
	id?: string
	dateLength: string
	planner: PlannerInfo[]
	style: PlannerStyle
	writer: string
	rating: number
	public?: boolean
}

export interface PlannerInfo {
	day: number
	title?: string
	description?: string
	activities: ActivityPlan[]
}

export interface ActivityPlan {
	hour: ActivityHour
	place?: PlannerPlace
	placeId: string
}

export interface PlannerPlace {
	placeId: string
	name: string
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
}

export interface ActivityHour {
	from: string
	to: string
}

export interface PlannerStyle {
	coverPhoto?: string
	showCover?: boolean
}
