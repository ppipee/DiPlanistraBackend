import { EventSearchInfo } from 'modules/event/types/event'
import { TatEventDetail } from 'modules/event/types/tatEvent'
import { UserDoc } from 'modules/user/models'

export default function resolveEventPreviewerWithEventDetail(tatEvent: TatEventDetail, user?: UserDoc) {
	const isFavorite = user?.events.includes(tatEvent.event_id)
	const thumbnail = (tatEvent.mobile_picture_urls || []).length > 0 ? tatEvent.mobile_picture_urls[0] : ''

	const event: EventSearchInfo = {
		eventId: tatEvent.event_id,
		name: tatEvent.event_name,
		introduction: tatEvent.event_information?.event_introduction,
		location: tatEvent.location,
		destination: tatEvent.destination,
		latitude: tatEvent.latitude,
		longitude: tatEvent.longitude,
		thumbnailUrl: thumbnail,
		tags: tatEvent.tags,
		periodDate: tatEvent.display_event_period_date,
		eventStart: tatEvent.event_start_date,
		eventEnd: tatEvent.event_end_date,
		updatedAt: tatEvent.update_date,
		distance: null,
		isFavorite,
	}

	return event
}
