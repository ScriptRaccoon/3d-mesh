import {
	add,
	forget_z,
	rotate_along_y,
	rotate_along_x,
	scale,
	type point2d,
	type point3d,
} from "./points"

interface camera_interface {
	pos: point3d
	rotation: point2d
	zoom: number
	project: (_: point3d) => point2d
}

export const camera: camera_interface = {
	pos: { x: 0, y: 0, z: 10 },
	rotation: { x: 0, y: 0 },
	zoom: 1000,
	project(point: point3d): point2d {
		const rotated_x = rotate_along_x(point, camera.rotation.x)
		const rotated_y = rotate_along_y(rotated_x, camera.rotation.y)
		return scale(
			camera.zoom / (rotated_y.z + camera.pos.z),
			add(forget_z(rotated_y), forget_z(camera.pos))
		)
	},
}
