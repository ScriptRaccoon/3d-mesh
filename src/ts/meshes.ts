import type { mesh } from "./mesh"

const cube: mesh = [
	[
		{ x: -1, y: -1, z: -1 },
		{ x: -1, y: 1, z: -1 },
		{ x: 1, y: 1, z: -1 },
		{ x: 1, y: -1, z: -1 },
	],
	[
		{ x: -1, y: -1, z: 1 },
		{ x: -1, y: 1, z: 1 },
		{ x: 1, y: 1, z: 1 },
		{ x: 1, y: -1, z: 1 },
	],
	[
		{ x: -1, y: -1, z: -1 },
		{ x: -1, y: -1, z: 1 },
	],
	[
		{ x: 1, y: -1, z: -1 },
		{ x: 1, y: -1, z: 1 },
	],
	[
		{ x: 1, y: 1, z: -1 },
		{ x: 1, y: 1, z: 1 },
	],
	[
		{ x: -1, y: 1, z: -1 },
		{ x: -1, y: 1, z: 1 },
	],
]

export const meshes = [cube]
