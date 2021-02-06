import { PlannerPlain } from 'modules/planner/models'
import { UserDoc } from 'modules/user/models'

export default function isAccessPlanner(planner: PlannerPlain, user?: UserDoc) {
	return String(user?._id) === String(planner.writer.id)
}
