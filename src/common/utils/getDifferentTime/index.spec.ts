import getDifferentTime from '.'

describe('getDifferentTime', () => {
	it('should return date length correctly', () => {
		const differentDate = getDifferentTime(new Date('02-05-2020'), new Date('02-07-2020'))

		expect(differentDate).toBe(2)
	})
})
