// Create the scene
const scene = new THREE.Scene();

// Load textures
const textureLoader = new THREE.TextureLoader();
const soilTexture = textureLoader.load('TCom_Ground_Soil3_header.jpg');
soilTexture.wrapS = THREE.RepeatWrapping;
soilTexture.wrapT = THREE.RepeatWrapping;
soilTexture.repeat.set(20, 20);

const grassTexture = textureLoader.load('Grass004_4K-JPG/Grass004_4K-JPG_Color.jpg');
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.repeat.set(60, 60);

// Load sky texture for background
const skyTexture = textureLoader.load('sky.jpg');
scene.background = skyTexture;

// Create the thin soil plane in the middle
const soilMaterial = new THREE.MeshStandardMaterial({ map: soilTexture });
const soilGeometry = new THREE.PlaneGeometry(10, 500);
const soilPlane = new THREE.Mesh(soilGeometry, soilMaterial);
soilPlane.rotation.x = -Math.PI / 2;
soilPlane.position.set(0, 0, -30);
scene.add(soilPlane);

// Create grass for the left side of the soil lane
const grassMaterial = new THREE.MeshBasicMaterial({ map: grassTexture });
const grassGeometry = new THREE.PlaneGeometry(120, 500);
const grassLeft = new THREE.Mesh(grassGeometry, grassMaterial);
grassLeft.rotation.x = -Math.PI / 2;
grassLeft.position.set(-65, 0, -30);
scene.add(grassLeft);

// Create grass for the right side of the soil lane
const grassRight = new THREE.Mesh(grassGeometry, grassMaterial);
grassRight.rotation.x = -Math.PI / 2;
grassRight.position.set(65, 0, -30);
scene.add(grassRight);

// Loaders for additional 3D models (bench, streetlight, fountain)
const loader = new THREE.GLTFLoader();

// Load bench model on the left side grass
loader.load('models/wooden_bench/scene.gltf', (gltf) => {
    const bench = gltf.scene;
    bench.position.set(10, 0, -40);
    bench.scale.set(0.04, 0.04, 0.04);
    
    // Rotate the model (example: rotate 90 degrees around the X axis)
    bench.rotation.y = Math.PI / 2; // Rotating by 90 degrees

    scene.add(bench);
});


// Load streetlight model on the left side grass, below the bench
loader.load('models/street_light/scene.gltf', (gltf) => {
    const streetlight = gltf.scene;
    streetlight.position.set(-10, 0, -50);
    streetlight.scale.set(1, 1.5, 1);
    scene.add(streetlight);
});

// Load fountain model on the right side grass
loader.load('models/street_light/scene.gltf', (gltf) => {
    const streetlight = gltf.scene;
    streetlight.position.set(-10, 0, -5);
    streetlight.scale.set(1, 1.5, 1);
    scene.add(streetlight);
});

// Load bench model on the right side grass, below the fountain
loader.load('models/wooden_bench/scene.gltf', (gltf) => {
    const bench = gltf.scene;
    bench.position.set(10, 0, 5);
    bench.scale.set(0.04, 0.04, 0.04);
    
    // Rotate the model (example: rotate 90 degrees around the X axis)
    bench.rotation.y = Math.PI / 2; // Rotating by 90 degrees

    scene.add(bench);
});

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 6, 40);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.shadowMap.enabled = true;

renderer.setPixelRatio(window.devicePixelRatio);

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('tour-container').appendChild(renderer.domElement);

// Lighting
/* AMBIENT LIGHT */

const ambientLight = new THREE.AmbientLight(
  0xffffff,
  1
);

scene.add(ambientLight);

/* SUN LIGHT */

const sunLight = new THREE.DirectionalLight(
  0xffffff,
  1.5
);

sunLight.position.set(50, 100, 50);

sunLight.castShadow = true;

scene.add(sunLight);

/* SOFT GREEN LIGHT */

const greenLight = new THREE.PointLight(
  0x57d163,
  2,
  200
);

greenLight.position.set(0, 20, 0);

scene.add(greenLight);
/* =========================
   AUTO HIDE INTRO BOX
========================= */

setTimeout(() => {

  const infoBox =
    document.getElementById("info-box");

  infoBox.style.transition =
    "all 0.8s ease";

  infoBox.style.opacity = "0";

  infoBox.style.transform =
    "translateY(-20px)";

  setTimeout(() => {

    infoBox.style.display = "none";

  }, 800);

}, 5000);

// Plants (already loaded into left and right positions)
const plants = [];

// Load plant models and place them along the soil lane
function loadPlantModel(path, position, scale, name) {
    return new Promise((resolve) => {
        loader.load(path, (gltf) => {
            const plant = gltf.scene;
            plant.position.set(position.x, position.y, position.z);
            plant.scale.set(scale.x, scale.y, scale.z);
            plant.name = name;
            plant.userData.plantName = name; // Store the name in userData
            scene.add(plant);
            plants.push(plant);
            resolve(plant);
        });
    });
}

// Load different plants with custom scales and positions
const plantLoadPromises = [
    // Left side
    loadPlantModel('models/hawthorn_tree/scene.gltf', { x: -25, y: 1, z: -50 }, { x: 7, y: 7, z: 7 }, 'Hawthorn'),
    loadPlantModel('models/echinacea/scene.gltf', { x: -25, y: -0.5, z: -25 }, { x: 15, y: 15, z: 15 }, 'Echinacea'),
    loadPlantModel('models/chili_pepper/scene.gltf', { x: -25, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }, 'Chilli Pepper'),

    // Right side
    loadPlantModel('models/elderberry/scene.gltf', { x: 25, y: -1.5, z: -50 }, { x: 0.50, y: 0.50, z: 0.50 }, 'Elderberry'),
    loadPlantModel('models/chinese_milk_vetch_astragalus_sinicus/scene.gltf', { x: 25, y: -0.1, z: -25 }, { x: 70, y: 70, z: 70 }, 'Astragalus'),
    loadPlantModel('models/tulsi/scene.gltf', { x: 25, y: 0, z: 0 }, { x: 9, y: 9, z: 9 }, 'Tulsi'),
];

// Raycaster for interaction
const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();
/* =========================
   PLANT LABEL
========================= */

const plantLabel =
  document.getElementById("plant-label");

let selectedPlant = null;

// Function to handle clicks
function onMouseClick(event) {

    mouse.x =
      (event.clientX / window.innerWidth) * 2 - 1;

    mouse.y =
      -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects =
      raycaster.intersectObjects(
        scene.children,
        true
      );

    if (intersects.length > 0) {

        let object = intersects[0].object;

        while (
          object.parent &&
          !object.userData.plantName
        ) {

            object = object.parent;
        }

        if (object.userData.plantName) {

    selectedPlant = object;

    plantLabel.innerHTML = `
      🌿 I am ${object.userData.plantName}
    `;

    plantLabel.style.display = "block";

    /* HIDE AFTER 3 SECONDS */

    clearTimeout(plantLabel.hideTimer);

    plantLabel.hideTimer = setTimeout(() => {

      plantLabel.style.display = "none";

      selectedPlant = null;

    }, 3000);
}
    }
}

// Add event listener for clicks
window.addEventListener('click', onMouseClick);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.08;

controls.rotateSpeed = 0.6;

controls.zoomSpeed = 1;

controls.panSpeed = 0.5;

controls.screenSpacePanning = false;

controls.minDistance = 5;

controls.maxDistance = 100;

controls.maxPolarAngle = Math.PI / 2.1;

controls.enablePan = false;
/* =========================
   KEYBOARD MOVEMENT
========================= */

const keys = {

  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,

  w: false,
  a: false,
  s: false,
  d: false
};

window.addEventListener("keydown", (e) => {

  if (keys.hasOwnProperty(e.key)) {

    keys[e.key] = true;
  }
});

window.addEventListener("keyup", (e) => {

  if (keys.hasOwnProperty(e.key)) {

    keys[e.key] = false;
  }
});

/* MOVEMENT SPEED */

const moveSpeed = 0.4;
const rotateSpeed = 0.03;

// Animation loop
function animate() {

  requestAnimationFrame(animate);

  controls.update();

  /* =========================
     FORWARD / BACKWARD
  ========================= */

  if (keys.ArrowUp || keys.w) {

    camera.position.z -= moveSpeed;
  }

  if (keys.ArrowDown || keys.s) {

    camera.position.z += moveSpeed;
  }

  /* =========================
     LEFT / RIGHT
  ========================= */

  if (keys.ArrowLeft || keys.a) {

    camera.position.x -= moveSpeed;
  }

  if (keys.ArrowRight || keys.d) {

    camera.position.x += moveSpeed;
  }

  /* CAMERA HEIGHT LIMIT */

  if (camera.position.y < 2) {

    camera.position.y = 2;
  }

  /* LOOK AHEAD */

  controls.target.set(

    camera.position.x,
    camera.position.y - 2,
    camera.position.z - 20

  );
/* =========================
   UPDATE FLOATING LABEL
========================= */

if (selectedPlant) {

  const position =
    selectedPlant.position.clone();

  position.y += 6;

  position.x += 4;

  const vector =
    position.project(camera);

  const x =
    (vector.x * 0.5 + 0.5)
    * window.innerWidth;

  const y =
    (-vector.y * 0.5 + 0.5)
    * window.innerHeight;

  plantLabel.style.left = `${x}px`;

  plantLabel.style.top = `${y}px`;
}
  renderer.render(scene, camera);
}

// Start the animation loop once all plants are loaded
Promise.all(plantLoadPromises).then(() => {
    animate();
});

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Start the animation loop once all plants are loaded
Promise.all(plantLoadPromises).then(() => {
    animate();
});