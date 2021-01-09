import convertObjectKey from '.'

describe('convertObjectKey', () => {
	it('should covert key to new key correctly', () => {
		let object = convertObjectKey({ a: '1' }, ['a'], ['b'])
		expect(object).toEqual({ b: '1' })

		object = convertObjectKey({ a: '1', c: '1' }, ['c'], ['b'])
		expect(object).toEqual({ a: '1', b: '1' })

		object = convertObjectKey({ a: '1', b: '2' }, ['a', 'b'], ['c', 'd'])
		expect(object).toEqual({ c: '1', d: '2' })

		object = convertObjectKey({ a: '1', b: '2', c: '3' }, ['a', 'b'], ['d', 'e'])
		expect(object).toEqual({ d: '1', e: '2', c: '3' })
	})

	it('should return original Object if  Object is not exist old key', () => {
		const object = convertObjectKey({ a: '1' }, ['c'], ['b'])

		expect(object).toEqual({ a: '1' })
	})
})
