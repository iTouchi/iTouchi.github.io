<template>
  <div id="container">
<h1>WebXR Demo using Three.js as WebGL Framework</h1>
  </div>
</template>

<script>
import * as THREE from "three";
import { ARButton } from "../scripts/ARButton";
console.log(ARButton);

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      cubeMesh: null,
    };
  },
  methods: {
    init: function() {
      const container = document.createElement("div");
      document.body.appendChild(container);

      // #1 create the scene, although there's nothing in it just yet
      this.scene = new THREE.Scene();

      // #2 create the camera
      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        40
      );

      // #3 Pick a three.js renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.xr.enabled = true;
      container.appendChild(this.renderer.domElement);
      // #4 Add a light to the scene
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0.5, 1, 0.25);
      this.scene.add(light);

      // #5 Add a shape to the scene
      // TODO textures don't load
      // var texture = new THREE.TextureLoader().load("@src/assets/textures/iTouch.png");
      // var texture2 = new THREE.TextureLoader().load('../assets/logo.png');

      const geometry = new THREE.IcosahedronGeometry(0.1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color("rgb(226,35,213)"),
        shininess: 6,
        shading: true,
        transparent: 1,
        opacity: 0.8,
        // map: texture2, TODO textures don't load
      });
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.mesh.position.set(0, 0, -0.5);
      // Cube

      const geometry2 = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      //const material2 = new THREE.MeshBasicMaterial({ color: 0xe06666 });
      var material2 = new THREE.MeshBasicMaterial({ });
      // var material2 = new THREE.MeshBasicMaterial({ map: texture }); TODO textures don't load
      this.cubeMesh = new THREE.Mesh(geometry2, material2);
      this.scene.add(this.cubeMesh);
      this.cubeMesh.position.z = -1;

      console.log(this.mesh);

      const button = ARButton.createButton(this.renderer);
      console.log(button);
      document.body.appendChild(button);

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    animate: function() {
      this.renderer.setAnimationLoop(this.render);
    },
    render: function() {
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
    this.render();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #000;
  color: #fff;
  font-family: Monospace;
  font-size: 16px;
  line-height: 24px;
  overscroll-behavior: none;
}

a {
  color: #ff0;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  cursor: pointer;
  text-transform: uppercase;
}

canvas {
  display: block;
}

a,
button,
input,
select {
  pointer-events: auto;
}
</style>
