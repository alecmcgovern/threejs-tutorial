window.onload = () => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side:THREE.DoubleSide });
  var cube = new THREE.Mesh( geometry, material );
  cube.geometry.faces[5].color.setHex( 0xff0000 ); 
  cube.geometry.faces[5].color.setHex( 0xff00ff ); 
  cube.geometry.faces[5].color.setHex( 0x0000ff ); 
  // mesh.geometry.colorsNeedUpdate = true;

  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  }

  animate();
}
