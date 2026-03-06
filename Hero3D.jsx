"use client"

import { useEffect } from "react"
import * as THREE from "three"

export default function Hero3D(){

useEffect(()=>{

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({alpha:true})

renderer.setSize(window.innerWidth,window.innerHeight)

document.getElementById("three").appendChild(renderer.domElement)

const geometry=new THREE.IcosahedronGeometry(2,1)

const material=new THREE.MeshStandardMaterial({

color:0xffffff,
metalness:1,
roughness:0.2

})

const tooth=new THREE.Mesh(geometry,material)

scene.add(tooth)

const light=new THREE.PointLight(0xffffff,3)

light.position.set(5,5,5)

scene.add(light)

camera.position.z=5

function animate(){

requestAnimationFrame(animate)

tooth.rotation.y+=0.01

renderer.render(scene,camera)

}

animate()

},[])

return <div id="three"></div>

}
