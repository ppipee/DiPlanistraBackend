import { EventDetail, EventInformation } from 'modules/event/types/event'
import { TatEventDetail } from 'modules/event/types/tatEvent'

export default function resolveEvent(tatEvent: TatEventDetail) {
	const information: EventInformation = {
		introduction: tatEvent.event_information.event_introduction,
		htmlDetail: tatEvent.event_information.event_html_detail,
		types: tatEvent.event_information.event_types,
	}

	const event: EventDetail = {
		eventId: tatEvent.event_id,
		name: tatEvent.event_name,
		information,
		contact: tatEvent.contact,
		location: tatEvent.location,
		destination: tatEvent.destination,
		latitude: tatEvent.latitude,
		longitude: tatEvent.longitude,
		picture: {
			webUrls: tatEvent.web_picture_urls,
			mobileUrls: tatEvent.mobile_picture_urls,
		},
		tags: tatEvent.tags,
		periodDate: tatEvent.display_event_period_date,
		eventStart: tatEvent.event_start_date,
		eventEnd: tatEvent.event_end_date,
		updatedAt: tatEvent.update_date,
	}

	return event
}
