window.onload = () => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var mesh;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var light = new THREE.DirectionalLight("#c1582d", 1);
  var ambient = new THREE.AmbientLight("#85b2cd");
  light.position.set( 0, -70, 100 ).normalize();

  var geometry = new THREE.SphereGeometry(10, 32, 32);
  var material = new THREE.MeshBasicMaterial({ color: 0xcc1c1c, wireframe: true });
  var sun = new THREE.Mesh(geometry, material);
  sun.position.set(0,0,200);
  scene.add(light);
  scene.add(ambient);
  scene.add(sun);

  var loader = new THREE.GLTFLoader();
  loader.load('http://127.0.0.1:8080/ISS_stationary.glb', (gltf) => {
    mesh = gltf.scene;
    scene.add( mesh );
  }, () => {
    console.log("loading...");
  }, () => {
    console.log("error loading 3D model");
  })

  camera.position.z = 80;

  var controls = new THREE.OrbitControls( camera, renderer.domElement );

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera );
  }

  animate();
}
