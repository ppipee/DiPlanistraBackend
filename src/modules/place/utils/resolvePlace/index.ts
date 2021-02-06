import { Contact, Place } from 'modules/place/types/place'
import resolvePlacePreview from 'modules/place/utils/resolvePlacePreview'
import { ActivityPlace } from 'modules/planner/types'

export default function resolvePlace(data: Place, userFavoritePlaces?: ActivityPlace[]) {
	const _contact = data.contact
	const contact: Contact = {
		address: _contact?.address,
		email: _contact?.email,
		phoneno: _contact?.phoneno,
		line: _contact?.line,
		instagram: _contact?.instagram,
		twitter: _contact?.twitter,
		facebookHomepage: _contact?.facebookHomepage,
		homepage: _contact?.homepage,
	}

	const placePreview = resolvePlacePreview(data, userFavoritePlaces)
	const place: Place = {
		...placePreview,
		lng: data.lng,
		lat: data.lat,
		contact,
		wifi: data.wifi,
		trueMoneyWallet: data.trueMoneyWallet,
		petFriendly: data.petFriendly,
		qrCodeAccepted: data.qrCodeAccepted,
		parkingType: data.parkingType,
		creditCardAccepted: data.creditCardAccepted,
	}

	return place
}
