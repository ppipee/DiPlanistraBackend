export default function convertObjectKey(object: Record<string, any>, oldKeys: string[], newKeys: string[]) {
	const keys = Object.keys(object)

	return keys.reduce((newObject, key) => {
		const keyIndex = oldKeys.indexOf(key)
		const objectKey = keyIndex >= 0 ? newKeys[keyIndex] : key

		if (keyIndex >= 0) {
			oldKeys.splice(keyIndex, 1)
			newKeys.splice(keyIndex, 1)
		}

		newObject[objectKey] = object[key]

		return newObject
	}, {})
}
