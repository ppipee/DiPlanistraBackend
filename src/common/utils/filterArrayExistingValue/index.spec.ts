import filterArrayExistingValue from '.'

describe('filterArrayExistingValue', () => {
	it('should remove array that are null, undefined, nan or empty from array', () => {
		expect(filterArrayExistingValue([undefined, 10, NaN, null, 2, 'a', [], {}])).toEqual([10, 2, 'a'])
	})
})
