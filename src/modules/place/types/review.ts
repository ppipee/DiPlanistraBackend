import { BasicPhoto, NameValue, Time } from './common'

export interface PlaceReview {
	id: string
	summary: string
	description: string
	rating: number
	reviewedTime: Time
	lastUpdatedTime: Time
	previewPhotos: BasicPhoto[]
	reviewerProfile: ReviewerProfile
	spendingHour: NameValue<number>
	priceRange?: NameValue<number>
	activities?: string[]
	numberOfComments: number
	numberOfHelpfulVotes: number
}

export interface ReviewerProfile {
	id: string
	gid: string
	name: string
	profilePicture: BasicPhoto
}
