import {
	AttractionInformation,
	Category,
	Place,
	PlacePreview,
	PlaceStatistic,
	WorkingHourStatus,
} from 'modules/place/types/place'
import { ActivityPlace } from 'modules/planner/types'

import resolveCategory from '../resolveCategory'

export default function resolvePlacePreview(data: Place, userFavoritePlaces: ActivityPlace[] = []) {
	const statistic: PlaceStatistic = {
		rating: data.statistic.rating,
		numberOfReviews: data.statistic.numberOfReviews,
	}

	const workingHoursStatus: WorkingHourStatus = {
		open: data.workingHoursStatus?.open,
		closingSoon: data.workingHoursStatus?.closingSoon,
		message: data.workingHoursStatus?.message,
	}
	const categories: Category[] = (data.categories || []).map((category) => resolveCategory(category))

	const _attractionInformation = data.attractionInformation
	const attractionInformation: AttractionInformation = {
		atm: _attractionInformation?.atm,
		attractionRestaurant: _attractionInformation?.attractionRestaurant,
		wheelchairAccess: _attractionInformation?.wheelchairAccess,
		souvenir: _attractionInformation?.souvenir,
		toilet: _attractionInformation?.toilet,
		entryFee: _attractionInformation?.entryFee,
	}

	const isFavorite = !!userFavoritePlaces.find((favoritePlace) => favoritePlace.publicId === data.publicId)

	const place: PlacePreview = {
		id: data.id,
		publicId: data.publicId,
		displayName: data.displayName,
		defaultPhoto: data.defaultPhoto,
		coverPhoto: data.coverPhoto,
		mainPhoto: data.mainPhoto,
		rating: data.rating,
		distance: data.distance,
		statistic: statistic,
		priceRange: data.priceRange,
		workingHoursStatus,
		hours: data.hours,
		categories,
		attractionInformation,
		isFavorite,
	}

	return place
}
