import { isEmpty, isNaN, isNil, isObject } from 'lodash'

export default function filterArrayExistingValue(array: any[]): any[] {
	return array.reduce((newArray, data) => {
		if (!isNil(data) && !isNaN(data) && !(isObject(data) && isEmpty(data))) {
			return [...newArray, data]
		}

		return newArray
	}, [])
}
