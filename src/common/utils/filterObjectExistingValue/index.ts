import { isEmpty, isNil, isObject, isNaN } from 'lodash'

export default function filterObjectExistingValues<T>(object: T): Partial<T> {
	return Object.keys(object)
		.filter((key) => !(isObject(object[key]) && isEmpty(object[key])) && !isNaN(object[key]) && !isNil(object[key]))
		.reduce((newObject, key) => ({ ...newObject, [key]: object[key] }), {})
}
