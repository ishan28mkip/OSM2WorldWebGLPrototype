

var stats = initStats(); //Load the stats panel
var scene = new THREE.Scene(); //Create the Scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000); //Create the camera

//WebGL Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0xadd8e6, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

//Camera
camera.position.x = -100;
camera.position.y = 100;
camera.position.z = 100;
camera.lookAt(new THREE.Vector3(0, 10, 0));

//Lighting

//General Ambient Lighting
var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//Sun
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );

//Append the renderer to the body
document.body.appendChild(renderer.domElement);

//Load the trackball controls
var controls = new THREE.TrackballControls( camera );
/*Controls Basic Settings*/
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

controls.noZoom = false;
controls.noPan = false;

controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;

controls.keys = [ 65, 83, 68 ];
controls.addEventListener( 'change', render );

var mesh;

var loader = new THREE.OBJMTLLoader();
loader.addEventListener('load', function (event) {
    var object = event.content;
    mesh = object;
    //Modify the object properties here
    scene.add(mesh);
});


loader.load('./models/map.obj', './models/map.obj.mtl', {side: THREE.DoubleSide});

render();
animate();

function animate() {
    requestAnimationFrame( animate );
    stats.update();
    controls.update();
}


function render() {
    //requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function initStats() {
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('statsOutput').appendChild(stats.domElement);
    return stats;
}

function initialize(){
    alert('Drag to initialize. Loaded Map : St. Nicholas Church, Berlin');
}

if (window.addEventListener)
  window.addEventListener('load', initialize, false);
else if (window.attachEvent)
  window.attachEvent('onload', initialize);
else window.onload = initialize;