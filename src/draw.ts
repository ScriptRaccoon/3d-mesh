import { ctx } from "./canvas";

function draw_polygon3d(polygon: polygon3d, camera: camera) {
	const projected: polygon2d = polygon.map(camera.project);
	const n = projected.length;
	if (n <= 1) return;
	ctx.beginPath();
	const first = projected[0];
	ctx.moveTo(first.x, first.y);
	for (let i = 1; i < n; i++) {
		const point = projected[i];
		ctx.lineTo(point.x, point.y);
	}
	ctx.lineTo(first.x, first.y);
	ctx.stroke();
	ctx.closePath();
}

export function draw_meshes(meshes: mesh[], camera: camera) {
	meshes.forEach((mesh) => {
		mesh.forEach((polygon) => draw_polygon3d(polygon, camera));
	});
}
