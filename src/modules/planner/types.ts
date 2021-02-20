import { BasicPhoto, LatLng, NameValue } from 'modules/place/types/common'
import { AttractionInformation, Categories, WorkingHourStatus } from 'modules/place/types/place'
// eslint-disable-next-line import/no-cycle
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
	isOwner: boolean
	isBookmark?: boolean
	numberOfBookmarks: number
	numberOfViews: number
}

export interface PlannerPreview extends Omit<Planner, 'planners'> {
	planners?: PlannerShortInfo[]
}

export interface PlannerInfo {
	day: number
	title?: string
	description?: string
	activities: ActivityPlan[]
}

export interface PlannerShortInfo extends Omit<PlannerInfo, 'activities'> {
	day: number
	title?: string
	description?: string
	activities: string
}

export interface ActivityPlan {
	_id?: string
	id?: string
	hour: ActivityHour
	place?: ActivityPlace
	memo?: string
	distance?: string // distance between current and next place
	duration?: string
}

export interface ActivityPlace {
	id?: string
	isFavorite?: boolean
	publicId: string
	name: string
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
	categories: Categories[]
	rating: number
	priceRange?: NameValue<number> // phase3
	workingHoursStatus: WorkingHourStatus
	entryFee?: AttractionInformation['entryFee']
	numberOfReviews: number
	domain: NameValue<number>
	targetViewGroupId: number
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
