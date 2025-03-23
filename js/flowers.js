import * as THREE from "three";

export function createFlowers() {
  const flowerCount = 200;
  const flowerGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.2); // Replace with your flower model
  const flowerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const flowerMesh = new THREE.InstancedMesh(
    flowerGeometry,
    flowerMaterial,
    flowerCount,
  );
  const dummy = new THREE.Object3D();
  const colorAttribute = new THREE.InstancedBufferAttribute(
    new Float32Array(flowerCount * 3),
    3,
  );

  for (let i = 0; i < flowerCount; i++) {
    const x = (Math.random() - 0.5) * 48;
    const z = (Math.random() - 0.5) * 48;
    dummy.position.set(x, 0.25, z);
    dummy.rotation.y = Math.random() * Math.PI * 2;
    dummy.scale.set(
      0.8 + Math.random() * 0.4,
      0.8 + Math.random() * 0.4,
      0.8 + Math.random() * 0.4,
    );
    dummy.updateMatrix();
    flowerMesh.setMatrixAt(i, dummy.matrix);

    const r = 0.8 + Math.random() * 0.2;
    const g = 0.2 + Math.random() * 0.3;
    const b = 0.4 + Math.random() * 0.3;
    colorAttribute.setXYZ(i, r, g, b);
  }

  flowerMesh.instanceMatrix.needsUpdate = true;
  flowerMesh.instanceColor = colorAttribute;
  flowerMesh.instanceColor.needsUpdate = true;
  return flowerMesh;
}
