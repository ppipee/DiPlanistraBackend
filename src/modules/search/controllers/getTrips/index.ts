import to from 'await-to-js'
import { Request, Response } from 'express'
import { isNumber } from 'lodash'
import isEmpty from 'lodash/isEmpty'

import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'

import { PlannerModel } from 'modules/planner/models'
import { PlannerPreview } from 'modules/planner/types'
import getPlannerPreviewData from 'modules/planner/utils/getPlannerPreviewData'
import filterWithKeyword from 'modules/search/utils/filterWithKeyword'
import { UserDoc } from 'modules/user/models'

type QueryTrips = {
	search?: string
	regions?: string
	sortby?: 'view' | 'bookmark'
}

const getTrips = async (req: Request, res: Response) => {
	const user = req.user as UserDoc
	const query = req.query as QueryTrips
	const { regions, search, sortby } = filterObjectExistingValues({
		regions: query?.regions,
		search: query?.search,
		sortby: query?.sortby,
	})

	const [error, planners] = await to(
		Promise.resolve(PlannerModel.find({ isPublic: true, 'writer.id': { $nin: [user?._id] } })),
	)

	if (error || !planners || isEmpty(planners)) {
		return res.status(404).send({ message: error })
	}

	let trips = planners

	if (regions && isNumber(regions)) {
		trips = filterWithKeyword(trips, ['planners.activities.place.targetViewGroupId'], regions)
	}

	if (search) {
		trips = filterWithKeyword(
			trips,
			[
				'name',
				'planners.title',
				'planners.description',
				'planners.activities.place.name',
				'planners.activities.place.categories.name',
				'planners.activities.place.categories.categories.name',
				'planners.activities.memo',
			],
			search,
		)
	}

	if (sortby && sortby === 'view') {
		trips.sort((tripA, tripB) => tripB.numberOfViews - tripA.numberOfViews)
	} else if (sortby && sortby === 'bookmark') {
		trips.sort((tripA, tripB) => tripB.numberOfBookmarks - tripA.numberOfBookmarks)
	}

	const tripsData: PlannerPreview[] = trips.map((planner) => getPlannerPreviewData(planner, user as UserDoc))

	return res.status(200).send({ trips: tripsData })
}

export default getTrips
