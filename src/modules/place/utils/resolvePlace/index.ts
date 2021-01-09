import { Contact, Place } from 'modules/place/types/place'
import resolvePlacePreview from 'modules/place/utils/resolvePlacePreview'

export default function resolvePlace(data: Place) {
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

	const placePreview = resolvePlacePreview(data)
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
