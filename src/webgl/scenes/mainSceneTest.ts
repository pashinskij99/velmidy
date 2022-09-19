
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import {
//     liver1,
//     liver2,
//     liver3,
//     liver4,
//     liver5,
//     liver6_f4_c,
//     liver6_f4,
//     liver_7,
// } from '../models/models.js';

const model1 = require('../models/modelsGLB/liver_1.glb');
const model2 = require('../models/modelsGLB/liver_2.glb')
const model3 = require('../models/modelsGLB/liver_3.glb')
const model4 = require('../models/modelsGLB/liver_4.glb')
const model5 = require('../models/modelsGLB/liver_5.glb')
const model6 = require('../models/modelsGLB/liver_6f4c.glb')
const model7 = require('../models/modelsGLB/liver_6f4.glb')
const model8 = require('../models/modelsGLB/liver_7.glb')

const modelsUrls = [model1, model2, model3, model4, model5, model6, model7, model8]

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
class Scene {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    )
    renderer = new THREE.WebGLRenderer();
    hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x080820, 6);
    directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.4)
    loader = new GLTFLoader()
    loadGLB = true
    controls: OrbitControls | undefined
    _init: any
    pageIndex?: number
    models: THREE.Object3D[] = []
    static modelsGltf: THREE.Object3D[] = []

    constructor(domElement?: HTMLDivElement, pageIndex?: number) {
        if (!domElement) {
            return
        }
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setClearColor(0xEFEFEF)
        domElement?.appendChild(this.renderer.domElement)
        this.scene.add(this.hemisphereLight, this.directionalLight);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.camera.position.z = .65
        this.camera.position.y = 0.05
        this.directionalLight.position.set(-2.5, 1.057, 1.216)
        this.controls.enableZoom = false
        this.controls.autoRotate = true
        this.controls.autoRotateSpeed = 10
        this.pageIndex = pageIndex
        this.controls.update()
        this.resize()
        this.init()
    }

    resize() {
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()

            this.renderer.setSize(sizes.width, sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
    }

    init() {
        const animate = () => {
            requestAnimationFrame(animate);
            this.controls!.update?.()
            this.renderer.render(this.scene, this.camera);
        }
        animate()
        this.loadGLB = true
        if (this.loadGLB) {
            modelsUrls.forEach((url, i) => {
                this.loader.load(
                    url.default,
                    (glb) => {
                        Scene.modelsGltf.push(glb.scene)
                        this.scene.add(glb.scene)
                        if (i !== this.pageIndex) {
                            glb.scene.scale.set(0, 0, 0)
                        }
                    }, undefined, (err) => {
                        console.log(err);
                    }
                );
            })
        } else if (!this.loadGLB) {
            // modelsUrls.forEach((url, i) => {
            //     this.loader.parse(
            //         url(),
            //         '',
            //         (gltf) => {
            //             Scene.modelsGltf.push(gltf.scene)
            //             if(i === this.pageIndex) gltf.scene.scale.set(1, 1, 1)
            //             else gltf.scene.scale.set(0,0,0)
            //             this.models.push(gltf.scene)
            //             this.scene.add(gltf.scene)
            //         })
            // })
        }
    }
    static method(indexPage: number) {
        Scene.modelsGltf.forEach((gltf, i) => {
            gltf.scale.set(0, 0, 0)

            if (indexPage === i) {
                gltf.scale.set(1, 1, 1)
            }
        })
    }
}

export { Scene };
