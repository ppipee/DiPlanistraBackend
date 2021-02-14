import Fuse from 'fuse.js'

const OPTIONS: Fuse.IFuseOptions<any> = {
	includeScore: false,
	shouldSort: true,
}

export default function filterWithKeyword<T>(targets: T[], keys: string[], search: string): T[] {
	const fuse = new Fuse(targets, { ...OPTIONS, keys })

	const fuseTargets = Object.values(fuse.search(search)).map((value) => value.item)

	return fuseTargets
}
