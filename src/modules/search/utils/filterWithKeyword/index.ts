import Fuse from 'fuse.js'

const OPTIONS: Fuse.IFuseOptions<any> = {
	shouldSort: true,
	distance: 30,
	threshold: 0.5,
}

export default function filterWithKeyword<T>(targets: T[], keys: string[], keyword: string): T[] {
	const fuse = new Fuse(targets, { ...OPTIONS, keys })

	const fuseTargets = Object.values(fuse.search(keyword)).map((value) => value.item)

	return fuseTargets
}
