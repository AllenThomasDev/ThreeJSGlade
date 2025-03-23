import * as THREE from "three";

export function setupLighting(scene) {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x808080);
  scene.add(ambientLight);
  return { directionalLight, ambientLight };
}
