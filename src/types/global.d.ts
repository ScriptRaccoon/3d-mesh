type point3d = {
	x: number;
	y: number;
	z: number;
};

type point2d = Omit<point3d, "z">;

type polygon3d = point3d[];
type polygon2d = point2d[];

type mesh = polygon3d[];

type camera = {
	pos: point3d;
	zoom: number;
	rotation: point2d;
	project: (_: point3d) => point2d;
};
