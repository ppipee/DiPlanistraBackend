import { Place } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/planner/types'

export default function resolveActivityPlace(place: Place) {
	const activityPlace: ActivityPlace = {
		publicId: place.publicId,
		name: place.displayName,
		coordinate: {
			lat: place.lat,
			lng: place.lng,
		},
		defaultPhoto: place.defaultPhoto,
		mainPhoto: place.mainPhoto,
		categories: place.categories,
		rating: place.rating,
		priceRange: place.priceRange,
		workingHoursStatus: place.workingHoursStatus,
		entryFee: place.attractionInformation?.entryFee,
		numberOfReviews: place.statistic?.numberOfReviews,
		isFavorite: true,
		domain: place.domain,
		targetViewGroupId: place.targetViewGroupId,
	}

	return activityPlace
}
