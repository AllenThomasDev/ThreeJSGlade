import * as THREE from "three";
import { initScene } from "./js/scene.js";
import { createGround } from "./js/ground.js";
import { createGrass } from "./js/grass.js";
import { createFlowers } from "./js/flowers.js";
import { setupLighting } from "./js/lighting.js";

async function main() {
  const { scene, camera, renderer, controls, clock } = initScene();
  const ground = createGround();
  const grass = await createGrass(); // Await the grass creation
  const flowers = createFlowers();
  const { directionalLight, ambientLight } = setupLighting(scene); // Pass the scene to setupLighting

  scene.add(ground);
  scene.add(grass);
  scene.add(flowers);

  function animate() {
    // Update shader uniforms
    grass.material.uniforms.time.value = clock.getElapsedTime();
    grass.material.uniformsNeedUpdate = true;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

main();
