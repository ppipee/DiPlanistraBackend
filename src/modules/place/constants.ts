import { PlaceCategories } from './types/place'

export const BASE_WONGNAI_URL = 'https://www.wongnai.com/_api'

export const BASE_ATTRACTIONS_URL = `${BASE_WONGNAI_URL}/${PlaceCategories.Attractions}`
export const BASE_RESTAURANTS_URL = `${BASE_WONGNAI_URL}/${PlaceCategories.Restaurants}`
export const BASE_HOTELS_URL = `${BASE_WONGNAI_URL}/${PlaceCategories.Hotels}`
export const BASE_PLACE_URL = `${BASE_WONGNAI_URL}/r`
export const BASE_BUSINESSES_URL = `${BASE_WONGNAI_URL}/businesses`

export enum DomainValue {
	UNKNOWN = 0,
	FOOD = 1,
	BEAUTY = 2,
	HOTEL = 3,
	ATTRACTION = 4,
	EVENT = 90,
	TRIP = 99,
}
