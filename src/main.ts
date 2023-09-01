import { camera } from "./camera";
import { clear_canvas, make_canvas_fullscreen } from "./canvas";
import { draw_meshes } from "./draw";
import { meshes } from "./meshes";

make_canvas_fullscreen();

// TODO: camera rotation along y-axis

function loop(time: number) {
	clear_canvas();
	camera.pos.x = Math.cos(time / 1000) * 2;
	draw_meshes(meshes, camera);
	requestAnimationFrame(loop);
}

loop(0);
