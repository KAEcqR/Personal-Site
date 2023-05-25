import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader()

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight)
camera.position.z = 2.5
scene.add(camera)

const textureLoader = new THREE.TextureLoader()



loader.load(
    `models\scene.gltf`,
    function (gltf) {
        object = gltf.scene
        scene.add(object)
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '%loaded')
    },
    function (err) {
        console.log(err)
    }
)

const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
document.querySelector(".model").append(renderer.domElement)


const tick = () => {
    window.requestAnimationFrame(tick)
    renderer.render(scene, camera)
}
tick()