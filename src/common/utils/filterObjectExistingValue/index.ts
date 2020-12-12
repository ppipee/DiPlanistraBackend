import { isEmpty, isNil, isObject, isNaN } from 'lodash'

export default function filterObjectExistingValues(object: Record<string, any>) {
	return Object.keys(object)
		.filter((key) => !(isObject(object[key]) && isEmpty(object[key])) && !isNaN(object[key]) && !isNil(object[key]))
		.reduce((newObject, key) => ({ ...newObject, [key]: object[key] }), {})
}
