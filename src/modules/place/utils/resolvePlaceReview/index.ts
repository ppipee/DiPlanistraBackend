import { PlaceReview, ReviewerProfile } from 'modules/place/types/review'

export default function resolvePlaceReview(data: PlaceReview) {
	const _reviewerProfile = data.reviewerProfile
	const reviewerProfile: ReviewerProfile = {
		id: _reviewerProfile.id,
		gid: _reviewerProfile.gid,
		name: _reviewerProfile.name,
		profilePicture: _reviewerProfile.profilePicture,
	}

	const review: PlaceReview = {
		id: data.id,
		summary: data.summary,
		description: data.description,
		rating: data.rating,
		reviewedTime: data.reviewedTime,
		lastUpdatedTime: data.lastUpdatedTime,
		previewPhotos: data.previewPhotos,
		reviewerProfile,
		spendingHour: data.spendingHour,
		priceRange: data.priceRange,
		activities: data.activities,
		numberOfComments: data.numberOfComments,
		numberOfHelpfulVotes: data.numberOfHelpfulVotes,
	}

	return review
}
