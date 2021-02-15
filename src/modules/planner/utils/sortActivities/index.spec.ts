import { ActivityPlan } from 'modules/planner/types'

import sortActivities from '.'

describe('sortActivities', () => {
	const MOCK_ACTIVITIES = [
		{
			hour: {
				from: '12:10',
			},
		},
		{
			hour: {
				from: '14:50',
			},
		},
		{
			hour: {
				from: '06:10',
			},
		},
		{
			hour: {
				from: '08:00',
			},
		},
	] as ActivityPlan[]

	const EXPECT_ACTIVITIES = [
		{
			hour: {
				from: '06:10',
			},
		},
		{
			hour: {
				from: '08:00',
			},
		},
		{
			hour: {
				from: '12:10',
			},
		},
		{
			hour: {
				from: '14:50',
			},
		},
	] as ActivityPlan[]

	it('should sort activities by startTime of activity correctly', () => {
		expect(sortActivities(MOCK_ACTIVITIES)).toEqual(EXPECT_ACTIVITIES)
		expect(
			sortActivities([
				{
					hour: {
						from: '14:50',
						to: '15:20',
					},
				},
			] as any),
		).toEqual([
			{
				hour: {
					from: '14:50',
					to: '15:20',
				},
			},
		])
	})
})
