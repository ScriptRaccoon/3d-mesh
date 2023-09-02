export function forget_z(p: point3d): point2d {
	return {
		x: p.x,
		y: p.y,
	};
}

export function add(p: point2d, q: point2d): point2d {
	return {
		x: p.x + q.x,
		y: p.y + q.y,
	};
}

export function scale(r: number, p: point2d): point2d {
	return {
		x: r * p.x,
		y: r * p.y,
	};
}

export function rotate_y(p: point3d, angle: number): point3d {
	return {
		x: p.x * Math.cos(angle) - p.z * Math.sin(angle),
		y: p.y,
		z: p.x * Math.sin(angle) + p.z * Math.cos(angle),
	};
}

export function rotate_x(p: point3d, angle: number): point3d {
	return {
		x: p.x,
		y: p.y * Math.cos(angle) - p.z * Math.sin(angle),
		z: p.y * Math.sin(angle) + p.z * Math.cos(angle),
	};
}
