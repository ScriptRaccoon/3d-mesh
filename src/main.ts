import { camera } from "./camera";
import { clear_canvas, make_canvas_fullscreen } from "./canvas";
import { draw_meshes } from "./draw";
import { meshes } from "./meshes";

make_canvas_fullscreen();

function loop() {
	clear_canvas();
	camera.rotation.x += 0.005;
	camera.rotation.y += 0.01;
	draw_meshes(meshes, camera);
	requestAnimationFrame(loop);
}

loop();
