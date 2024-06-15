import { OrbitControls } from "three/examples/jsm/Addons.js"
import { mx_worley_noise_float } from "/three/examples/jsm/nodes/Nodes.js"
const scene=new THREE.Scene()


// geometry of boxes

const geometry1=new THREE.BoxGeometry(2,2,2)
const geometry2=new THREE.BoxGeometry(2,2,2)
const geometry3=new THREE.BoxGeometry(2,2,2)
const geometry4=new THREE.BoxGeometry(2,2,2)

// creating material

const material1=new THREE.MeshBasicMaterial({color: "red"})
const material2=new THREE.MeshBasicMaterial({color: "green"})
const material3=new THREE.MeshBasicMaterial({color: "yellow"})
const material4=new THREE.MeshBasicMaterial({color: "aqua"})

// creating objects

const box1=new THREE.Mesh(geometry1,material1)
const box2=new THREE.Mesh(geometry2,material2)
const box3=new THREE.Mesh(geometry3,material3)
const box4=new THREE.Mesh(geometry4,material4)

box1.position.x=1.5
box1.position.y=1.5

box2.position.x=-1.5
box2.position.y=1.5

box3.position.x=1.5
box3.position.y=-1.5

box4.position.x=-1.5
box4.position.y=-1.5



// adding box to the scene

scene.add(box1,box2,box3,box4)

// Group

const group=new THREE.Group();
group.add(box1,box2,box3,box4)

scene.add(group)

// Camera

const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight)
camera.position.z=15
camera.lookAt(group.position)


// Resizing

    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
    })



// Rendering


const target=document.querySelector(".wbgl")
const renderer=new THREE.WebGLRenderer({canvas: target})
renderer.setSize(window.innerWidth,window.innerHeight)


const control=new OrbitControls(camera,target)
control.enableDamping=true



const tick=()=>{

    

control.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick);
}

tick()
