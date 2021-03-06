import { EventSearchInfo } from 'modules/event/types/event'
import { TatEventSearchInfo } from 'modules/event/types/tatEvent'
import { UserDoc } from 'modules/user/models'

export default function resolveEventPreviewer(tatEvent: TatEventSearchInfo, user?: UserDoc) {
	const isFavorite = user?.events.includes(tatEvent.event_id)

	const event: EventSearchInfo = {
		eventId: tatEvent.event_id,
		name: tatEvent.event_name,
		introduction: tatEvent.event_introduction,
		location: tatEvent.location,
		destination: tatEvent.destination,
		latitude: tatEvent.latitude,
		longitude: tatEvent.longitude,
		thumbnailUrl: tatEvent.thumbnail_url,
		tags: tatEvent.tags,
		periodDate: tatEvent.display_event_period_date,
		eventStart: tatEvent.event_start_date,
		eventEnd: tatEvent.event_end_date,
		updatedAt: tatEvent.update_date,
		distance: tatEvent.distance,
		isFavorite,
	}

	return event
}
