import { add, forget_z, scale } from "./points";

export const camera: camera = {
	pos: {
		x: 0,
		y: 2,
		z: 10,
	},

	zoom: 1000,

	project(point: point3d): point2d {
		return scale(
			camera.zoom / (point.z + camera.pos.z),
			add(forget_z(point), forget_z(camera.pos))
		);
	},
};
