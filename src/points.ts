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
