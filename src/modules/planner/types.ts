import { BasicPhoto, LatLng } from 'modules/place/types/common'
import { AttractionInformation, Category, WorkingHourStatus } from 'modules/place/types/place'
import { UserResponse } from 'modules/user/types'

export interface InitPlanner {
	name: string
	startDate: Date
	endDate: Date
}

export interface Planner extends InitPlanner {
	id?: string
	dateLength: number
	planners: PlannerInfo[]
	style: PlannerStyle
	writer: UserResponse
	rating: number
	isPublic?: boolean
	createdAt?: Date
	updatedAt?: Date
}

export type PlannerPreview = Omit<Planner, 'planners' | 'style'>

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
	memo?: string
	distance?: number
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

export interface EditActivity {
	id?: string
	hour: ActivityHour
	placeId: string // publicId
	memo?: string
}

export interface ActivityPlace {
	publicId: string
	name: string
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
	categories: Category[]
	rating: number
	priceRange?: number // phase3
	workingHoursStatus: WorkingHourStatus
	entryFee?: AttractionInformation['entryFee']
}
