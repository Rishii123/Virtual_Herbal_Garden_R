const React = require('react');

function Plants(props) {
  const { plant = {} } = props;
  const categories = Array.isArray(plant.category) ? plant.category.join(', ') : plant.category;
  const commonNames = Array.isArray(plant.commonNames) ? plant.commonNames.join(', ') : plant.commonNames;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{plant.name}</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
        <style>{`
body { margin: 0; font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #0f2027, #2c7744); color: #333; }
h1 { text-align: center; font-size: 3rem; color: white; margin-top: 20px; }
#container { 
  width: 90%; 
  max-width: 1200px; 
  margin: 20px auto; 
  display: flex; 
  gap: 30px; 
  align-items: stretch; /* MAIN FIX */
}

/* LEFT SIDE */
.plant-info { 
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* IMAGE FULL HEIGHT */
.plant-info img { 
  width: 100%;
  height: 100%;        /*  */
  object-fit: cover;   /* distortion fix */
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

/* RIGHT SIDE */
.text-details { 
  flex: 1; 
  background: rgba(255,255,255,0.9); 
  padding: 20px; 
  border-radius: 15px;
}
.model-container { width: 100%; height: 400px; margin-top: 20px; }

.section-title { margin-top: 20px; font-size: 1.3rem; font-weight: bold; color: #0b5f2b; border-bottom: 2px solid #27c13e; padding-bottom: 5px; text-align: center; }
.uses-container { width: 90%; margin: 30px auto; }
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); gap: 20px; }
.card { background: rgba(255,255,255,0.95); padding: 15px; border-radius: 15px; box-shadow: 0 6px 15px rgba(0,0,0,0.2); transition: 0.3s; }
.card:hover { transform: translateY(-8px) scale(1.02); }
.card h3 { color: #0b5f2b; }
.card p { font-size: 0.95rem; }
.btns { display: flex; justify-content: center; gap: 20px; margin: 20px; }
.btns button { padding: 10px 20px; border: none; background: #0b5f2b; color: white; border-radius: 8px; cursor: pointer; }
.btns button:hover { background: #27c13e; }
.video-section { text-align: center; margin: 30px; }
video { border-radius: 15px; }
.go-home-btn { position: absolute; top: 20px; right: 30px; background: #0b5f2b; color: white; padding: 8px 12px; border-radius: 8px; text-decoration: none; }
`}</style>
      </head>
      <body>
        <h1>{plant.name}</h1>
        <a href="/home" className="go-home-btn">Home</a>

        <div id="container">
          <div className="plant-info">
  <img src={plant.imageUrl} alt={plant.name} />
</div>
          <div className="text-details">
            <p><strong>Botanical:</strong> {plant.botanicalName}</p>
            <p><strong>Common Names:</strong> {commonNames}</p>
            <p><strong>Category:</strong> {categories}</p>
            <p><strong>Region:</strong> {plant.habitat?.nativeRegion}</p>

            <div className="section-title">Growing Conditions</div>
            <p><strong>Soil:</strong> {plant.habitat?.growingConditions?.soil}</p>
            <p><strong>Sunlight:</strong> {plant.habitat?.growingConditions?.sunlight}</p>
            <p><strong>Water:</strong> {plant.habitat?.growingConditions?.water}</p>

            <div className="section-title">Medicinal Uses</div>
            <ul>
              {plant.medicinalUses?.map((use, index) => (
                <li key={index}><strong>{use.use}:</strong> {use.description}</li>
              ))}
            </ul>

            <div className="section-title">Cultivation</div>
            <p><strong>Propagation:</strong> {plant.methodsOfCultivation?.propagation}</p>
            <p><strong>Planting:</strong> {plant.methodsOfCultivation?.planting?.instructions}</p>
            <p><strong>Spacing:</strong> {plant.methodsOfCultivation?.planting?.spacing}</p>
            <p><strong>Watering:</strong> {plant.methodsOfCultivation?.watering}</p>
          </div>
        </div>

        <div className="uses-container">
          <h2 className="section-title" style={{ color: 'white' }}>Practical Uses</h2>
          <div className="cards">
            {plant.practicalUses?.map((use, index) => (
              <div className="card" key={index}>
                <h3 className="method">{use.method}</h3>
                <div className="steps">
                  <p className="label"><strong>How to use:</strong></p>
                  <ol>
                    {use.steps?.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p><strong>Duration:</strong> {use.duration}</p>
                <p><strong>Benefits:</strong> {use.benefits}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="btns">
          <button id="listen-button">Listen</button>
          <button id="pause-button">Pause</button>
          <button id="resume-button">Resume</button>
        </div>

        <div className="video-section">
          <h2 style={{ color: 'white' }}>Watch Video</h2>
          <video controls width="400">
            <source src="/tulsivideo.mp4" />
          </video>
        </div>

        <script>{`const container = document.getElementById('model-container');
if (container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight,0.1,1000);
  camera.position.set(0,1,5);
  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(container.clientWidth,container.clientHeight);
  container.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff,1);
  scene.add(light);
  const loader = new THREE.GLTFLoader();
  loader.load('${plant.modelUrl}', function(gltf){
    const model = gltf.scene;
    scene.add(model);
    function animate(){
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      renderer.render(scene,camera);
    }
    animate();
  });
}`}</script>
      </body>
    </html>
  );
}

module.exports = Plants;
