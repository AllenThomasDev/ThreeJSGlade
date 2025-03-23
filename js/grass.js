import * as THREE from "three";

export async function createGrass() {
  const instanceNumber = 100000;
  const dummy = new THREE.Object3D();
  const geometry = new THREE.PlaneGeometry(0.1, 0.5, 1, 4);
  geometry.translate(0, 0.5, 0);

  const vertexShader = await (await fetch("./shaders/grass.vert")).text();
  const fragmentShader = await (await fetch("./shaders/grass.frag")).text();

  const uniforms = {
    time: { value: 0 },
  };

  const leavesMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    side: THREE.DoubleSide,
  });

  const instancedMesh = new THREE.InstancedMesh(
    geometry,
    leavesMaterial,
    instanceNumber,
  );

  for (let i = 0; i < instanceNumber; i++) {
    dummy.position.set(
      (Math.random() - 0.5) * 50,
      0,
      (Math.random() - 0.5) * 50,
    );
    dummy.scale.setScalar(0.5 + Math.random() * 0.5);
    dummy.rotation.y = Math.random() * Math.PI;
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
  }
  return instancedMesh;
}
