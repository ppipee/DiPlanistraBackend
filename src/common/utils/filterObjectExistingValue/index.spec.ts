import filterObjectExistingValue from '.'

describe('filterObjectExistingValue', () => {
	it('should filter null, undefined nan or empty value of Object correctly', () => {
		const object = filterObjectExistingValue({
			a: null,
			b: NaN,
			c: undefined,
			d: 10,
			e: 'abc',
			f: [],
			g: {},
			h: [1, 2],
		})

		expect(object).toEqual({
			d: 10,
			e: 'abc',
			h: [1, 2],
		})
	})
})
