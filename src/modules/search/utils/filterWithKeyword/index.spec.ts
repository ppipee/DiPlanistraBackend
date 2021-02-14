import filterWithKeyword from '.'

const LIST = [
	{
		title: "Old Man's War",
		author: {
			name: 'John Scalzi',
			tags: [
				{
					value: 'American',
				},
				{
					value: 'Thai',
				},
			],
		},
	},
	{
		title: "Old Man's War2",
		author: {
			name: 'American',
			tags: [
				{
					value: 'English',
				},
			],
		},
	},
	{
		title: 'The Lock Artist',
		author: {
			name: 'Steve Hamilton',
			tags: [
				{
					value: 'English',
				},
			],
		},
	},
]

describe('filterWithKeyword', () => {
	it('should filter and return correctly', () => {
		const objects = filterWithKeyword(LIST, ['author.tags.value', 'author.name'], 'American')

		expect(objects).toEqual([
			{
				title: "Old Man's War",
				author: {
					name: 'John Scalzi',
					tags: [
						{
							value: 'American',
						},
						{
							value: 'Thai',
						},
					],
				},
			},
			{
				title: "Old Man's War2",
				author: {
					name: 'American',
					tags: [
						{
							value: 'English',
						},
					],
				},
			},
		])
	})
})
