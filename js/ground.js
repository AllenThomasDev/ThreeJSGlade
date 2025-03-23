import * as THREE from "three";

export function createGround() {
  const groundGeometry = new THREE.PlaneGeometry(50, 50);
  const textureLoader = new THREE.TextureLoader();
  const grassTexture = textureLoader.load("assets/grass_texture.jpg"); // Optional texture

  grassTexture.wrapS = THREE.RepeatWrapping;
  grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(10, 10);

  const groundMaterial = new THREE.MeshLambertMaterial({ map: grassTexture }); // Or MeshBasicMaterial
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  return ground;
}
