function CrearFigura3D(caras) {
  const radius=1;
  const shape = new THREE.Shape();

  //formacion de la figura 2D para asegurar su correcta formacion
  for (let i = 0; i < (caras-2); i++) {
    const x = radius * Math.cos(i * 2 * Math.PI / caras);
    const y = radius * Math.sin(i * 2 * Math.PI / caras);
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  // Extrucion de las caras y quitamos el biselado
  const extrudeSettings = {
    depth: 1,
    bevelEnabled: false 
  };

  // Creamos la figura ya 3D
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
  const mesh = new THREE.Mesh(geometry, material);

  // Material para visualizar los vertices
  const materialVertices = new THREE.LineBasicMaterial({color: 0x000000});
  const meshVertices = new THREE.LineLoop(geometry, materialVertices);

  scene.add(meshVertices);

  return mesh;
}
