import { Categories } from 'modules/place/types/place'

export default function resolveCategory(data: Categories) {
	const subCategories = (data.categories || []).map((category) => resolveCategory(category))

	const category: Categories = {
		id: data.id,
		name: data.name,
		numberOfBusinesses: data.numberOfBusinesses,
		categories: subCategories,
	}

	return category
}
