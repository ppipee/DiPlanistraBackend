import { PlannerPlain } from 'modules/planner/models'
import { UserDoc } from 'modules/user/models'

export default function isAccessPlanner(user: UserDoc, planner: PlannerPlain) {
	return user.id === planner.writerId || planner.isPublic
}
