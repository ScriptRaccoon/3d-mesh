import { add, forget_z, rotate_y, rotate_x, scale } from "./points";

export const camera: camera = {
	pos: {
		x: 0,
		y: 1,
		z: 10,
	},

	rotation: { x: 0, y: 0 },

	zoom: 1000,

	project(point: point3d): point2d {
		const rotated_x = rotate_x(point, camera.rotation.x);
		const rotated_y = rotate_y(rotated_x, camera.rotation.y);
		return scale(
			camera.zoom / (rotated_y.z + camera.pos.z),
			add(forget_z(rotated_y), forget_z(camera.pos))
		);
	},
};
