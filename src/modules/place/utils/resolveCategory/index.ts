import { Category } from 'modules/place/types/place'

export default function resolveCategory(data: Category) {
	const subCategories = (data.categories || []).map((category) => resolveCategory(category))

	const category: Category = {
		id: data.id,
		name: data.name,
		numberOfBusinesses: data.numberOfBusinesses,
		categories: subCategories,
	}

	return category
}
