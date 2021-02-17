/* eslint-disable camelcase */
export interface TatEventType {
	code: string
	description: string
}

export interface TatEventInformation {
	event_introduction: string
	event_html_detail: string
	event_types: TatEventType[]
}

export interface TatEventContact {
	phones: string[]
	emails: string[]
	urls: string[]
}

export interface TatEventDetail {
	event_id: string
	event_name: string
	latitude: number
	longitude: number
	web_picture_urls: string[]
	mobile_picture_urls: string[]
	tags?: string[]
	display_event_period_date: string
	event_start_date: Date
	event_end_date: Date
	location: string
	destination: string
	event_information: TatEventInformation
	contact: TatEventContact
	update_date: Date
}

export interface TatEventSearchInfo {
	event_id: string
	event_name: string
	latitude: number
	longitude: number
	event_introduction: string
	thumbnail_url: string
	tags?: string[]
	display_event_period_date: string
	event_start_date: Date
	event_end_date: Date
	location: string
	destination: string
	update_date: Date
	distance: number
}
