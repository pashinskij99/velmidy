import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { CubeTextureLoader, TextureLoader, UnsignedByteType } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';

interface InnerWindowSize {
    width: number;
    height: number;
}
interface PreviousMousePosition {
    x: number;
    y: number;
}

class Scene {
    sizes: InnerWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    previousMousePosition: PreviousMousePosition = {
        x: 0,
        y: 0,
    };

    scene: THREE.Scene = new THREE.Scene();
    camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
        75,
        this.sizes.width / this.sizes.height,
        0.1,
        1000
    );
    renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
        antialias: true,
    });
    composer: any = new EffectComposer(this.renderer);

    ambientLight: THREE.AmbientLight = new THREE.AmbientLight('white', 0.3);
    hemisphereLight: THREE.HemisphereLight = new THREE.HemisphereLight(
        0xffffff,
        0xffffff,
        0.1
    );
    spotLight: THREE.SpotLight = new THREE.SpotLight(
        0xc1d9ff,
        0.5,
        0,
        1.571,
        0,
        0.3
    );
    directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
        'gray',
        0.6
    );

    modelsForQuant: THREE.Object3D = new THREE.Object3D();
    cubeForQuant: THREE.Object3D = new THREE.Object3D();
    room: THREE.Object3D = new THREE.Object3D();
    loader: GLTFLoader = new GLTFLoader();
    dracoLoader: DRACOLoader = new DRACOLoader();
    textureLoader: TextureLoader = new TextureLoader();
    pageIndex: number;
    positionModels: THREE.Vector3 = new THREE.Vector3(0, 2, 0);
    isDragging?: boolean = false;
    planeGeometry: THREE.PlaneBufferGeometry = new THREE.PlaneBufferGeometry(
        15,
        15
    );
    planeMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial();
    planeMesh?: THREE.Mesh;

    mixer?: THREE.AnimationMixer;
    clock: THREE.Clock = new THREE.Clock();
    previousTime: any = 0;
    type: string;
    imgHTML: HTMLImageElement;
    reactPage = 0;
    reactType = 'liver';
    startX = 0;
    startY = 0;
    endX = 0;
    endY = 0;
    cursorX = 0;
    cursorY = 0;

    constructor(
        domElement: HTMLDivElement,
        pageIndex: number,
        type: string,
        imgHTML: HTMLImageElement,
        HdrFile: any
    ) {
        this.imgHTML = imgHTML;
        this.type = type;
        this.camera.position.set(0.1, 3.5, 7); //8.65
        this.camera.rotation.set(-0.1, 0.0, 0);
        this.spotLight.position.set(0, 10, 0);
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        //@ts-ignore fixed gamma output
        this.renderer.gammaOutput = true;
        this.renderer.physicallyCorrectLights = true;
        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        pmremGenerator.compileEquirectangularShader();
        //@ts-ignore fixed gamma output
        this.renderer.gammaFactor = 2.2;
        this.renderer.toneMapping = THREE.LinearToneMapping;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        domElement.appendChild(this.renderer.domElement);
        this.directionalLight.position.set(0, -1, 2);
        this.spotLight.position.set(0, 10, 0);
        this.scene.add(
            // this.ambientLight,
            this.directionalLight
            // this.spotLight
            // this.hemisphereLight
        );

        this.pageIndex = pageIndex;

        const KTX2_LOADER = new KTX2Loader();
        this.loader.setKTX2Loader(KTX2_LOADER);

        this.resize();
        this.mouseDown();
        this.mouseUp();
        this.mouseMove();
        window.addEventListener('touchstart', (e) => {
            this.onTouchStart(e);
        });
        window.addEventListener('touchend', (e) => {
            this.onTouchEnd(e);
        });
        window.addEventListener('touchmove', (e) => {
            this.onTouchMove(e);
        });
        this.pageChange();
        this.typeChange();

        let fetchedTexture;
        new RGBELoader()
            .setDataType(UnsignedByteType)
            .load(HdrFile, (texture: any) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                this.scene.environment = texture;
                fetchedTexture = texture;
            });

        this.init();

        setInterval(() => {
            this.onResize();
        }, 100);
    }

    toRadians(angle: number): number {
        return angle * (Math.PI / 180);
    }

    pageChange(): void {
        window.addEventListener('onpagechange', (e: any) => {
            this.reactPage = +e.detail;
            this.reactType = 'liver';
            this.onPageChange();
        });
    }

    typeChange(): void {
        window.addEventListener('ontypechange', (e: any) => {
            this.reactType = e.detail;
            this.onPageChange();
        });
    }

    mouseUp(): void {
        window.addEventListener('mouseup', () => {
            this.isDragging = false;
        });
    }

    mouseMove(): void {
        window.addEventListener('mousemove', (e) => {
            this.onMouseMove(e);
        });
    }

    onPageChange(): void {
        let modelCube;

        if (this.reactType === 'cube')
            modelCube = require(`../models/cubes/cube_${this.reactPage + 1}`);

        let modelUrl;
        if (this.reactType === 'liver')
            modelUrl = require(`../models/modelsGLB/liver_${
                this.reactPage + 1
            }`);

        switch (this.reactType) {
            case 'liver':
                if (this.imgHTML) this.imgHTML.style.zIndex = '0';
                this.loader.parse(modelUrl.liver(), '', (gltf) => {
                    if (gltf.animations[0]) {
                        this.mixer = new THREE.AnimationMixer(gltf.scene);
                        const action = this.mixer.clipAction(
                            gltf.animations[0]
                        );
                        action.startAt(1);
                        if (this.reactPage === 6) {
                            action.loop = THREE.LoopRepeat;
                            action.setDuration(5);
                        } else {
                            action.clampWhenFinished = true;
                            action.loop = THREE.LoopOnce;
                        }

                        action.play();
                    }
                    gltf.scene.scale.set(9, 9, 9);
                    gltf.scene.position.set(
                        this.positionModels.x,
                        this.positionModels.y + 0.5,
                        1
                    );
                    if (gltf.animations[0])
                        gltf.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 1,
                            1
                        );
                    if (this.reactPage === 7) {
                        gltf.scene.scale.set(6, 6, 6);
                        gltf.scene.translateX(1.7);
                    }
                    if (this.reactPage === 0)
                        //@ts-ignore material exists on model
                        gltf.scene.children[0].material.roughness = 0.2;

                    this.scene.add(gltf.scene);
                    this.scene.remove(this.modelsForQuant);
                    this.scene.remove(this.cubeForQuant);
                    this.modelsForQuant = gltf.scene;
                });
                break;
            case 'cube':
                if (this.imgHTML) this.imgHTML.style.zIndex = '1000';
                this.loader.parse(modelCube.cube(), '', (glb) => {
                    this.scene.add(glb.scene);
                    this.scene.remove(this.cubeForQuant);
                    this.scene.remove(this.modelsForQuant);
                    this.cubeForQuant = glb.scene;
                    if (this.pageIndex >= 1 && this.pageIndex <= 5) {
                        glb.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 2.3,
                            1
                        );
                        glb.scene.scale.set(5, 5, 5);
                    } else {
                        glb.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 1,
                            1
                        );
                        glb.scene.scale.set(6, 6, 6);
                    }
                });
                break;
        }
    }

    onMouseMove(e: MouseEvent): void {
        const deltaMove = {
            x: e.offsetX - this.previousMousePosition.x,
            y: e.offsetY - this.previousMousePosition.y,
        };
        if (this.isDragging) {
            const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(
                    this.toRadians(deltaMove.y * 0.7),
                    this.toRadians(deltaMove.x * 0.7),
                    0,
                    'XYZ'
                )
            );
            this.modelsForQuant?.quaternion.multiplyQuaternions(
                deltaRotationQuaternion,
                this.modelsForQuant?.quaternion
            );
            this.cubeForQuant?.quaternion.multiplyQuaternions(
                deltaRotationQuaternion,
                this.cubeForQuant?.quaternion
            );
        }
        this.previousMousePosition = {
            x: e.offsetX,
            y: e.offsetY,
        };
    }

    onTouchStart(e: TouchEvent) {
        this.startX = e.touches[0].pageX / this.sizes.width - 0.5;
        this.startY = e.touches[0].pageY / this.sizes.height - 0.5;
    }

    onTouchEnd(e: TouchEvent) {
        this.endX = this.cursorX;
        this.endY = this.cursorY;
    }

    onTouchMove(e: TouchEvent) {
        this.cursorX =
            e.touches[0].pageX / this.sizes.width -
            0.5 -
            this.startX +
            this.endX;
        this.cursorY =
            e.touches[0].pageY / this.sizes.height -
            0.5 -
            this.startY +
            this.endX;

        this.modelsForQuant?.rotation.set(
            this.cursorY * 7,
            this.cursorX * 7,
            0,
            'XYZ'
        );
        this.cubeForQuant?.rotation.set(
            this.cursorY * 7,
            this.cursorX * 7,
            0,
            'XYZ'
        );

        // this.modelsForQuant?.quaternion.multiplyQuaternions(
        //     deltaRotationQuaternion,
        //     this.modelsForQuant?.quaternion
        // );
        // this.cubeForQuant?.quaternion.multiplyQuaternions(
        //     deltaRotationQuaternion,
        //     this.cubeForQuant?.quaternion
        // );
    }

    mouseDown(): void {
        window.addEventListener('mousedown', () => {
            this.isDragging = true;
        });
    }

    resize(): void {
        window.addEventListener('resize', () => {
            this.onResize();
        });
    }

    onResize(): void {
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;

        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    loadmodels(): void {
        let _i = this.pageIndex + 1 || 1;

        if (_i > 8) _i = 8;

        let modelCube;

        if (this.type === 'cube' && _i <= 6)
            modelCube = require(`../models/cubes/cube_${_i}`);

        let modelUrl;
        if (this.type === 'liver') {
            modelUrl = require(`../models/modelsGLB/liver_${_i}`);
        }

        let img: any | undefined;
        if (this.pageIndex >= 1 && this.pageIndex <= 5) {
            // img = require(`../../assets/images/main_content_img/f${this.pageIndex}.png`)
        }

        if (_i > 8) _i = 8;

        switch (this.type) {
            case 'liver':
                if (this.imgHTML) this.imgHTML.style.zIndex = '0';
                this.loader.parse(modelUrl.liver(), '', (gltf) => {
                    if (gltf.animations[0]) {
                        this.mixer = new THREE.AnimationMixer(gltf.scene);
                        const action = this.mixer.clipAction(
                            gltf.animations[0]
                        );
                        action.clampWhenFinished = true;
                        action.loop = THREE.LoopOnce;

                        action.play();
                    }
                    gltf.scene.scale.set(9, 9, 9);
                    gltf.scene.position.set(
                        this.positionModels.x,
                        this.positionModels.y + 0.5,
                        1
                    );
                    if (gltf.animations[0])
                        gltf.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 1,
                            1
                        );
                    if (this.reactPage === 0)
                        //@ts-ignore material exists on model
                        gltf.scene.children[0].material.roughness = 0.2;
                    this.scene.add(gltf.scene);
                    this.modelsForQuant = gltf.scene;
                });
                break;
            case 'cube':
                if (this.imgHTML) this.imgHTML.style.zIndex = '1000';
                this.loader.parse(modelCube.cube(), '', (glb) => {
                    this.scene.add(glb.scene);
                    this.cubeForQuant = glb.scene;
                    if (this.pageIndex >= 1 && this.pageIndex <= 5) {
                        glb.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 2.3,
                            1
                        );
                        glb.scene.scale.set(5, 5, 5);
                    } else {
                        glb.scene.position.set(
                            this.positionModels.x,
                            this.positionModels.y + 1,
                            1
                        );
                        glb.scene.scale.set(6, 6, 6);
                    }
                });
                break;
        }
    }

    applyShader(): void {
        //@ts-ignore 1234
        const VignetteShader = {
            uniforms: {
                tDiffuse: { type: 't', value: null },

                resolution: { type: 'v2', value: new THREE.Vector2() },
                gain: { type: 'f', value: 0.9 },

                horizontal: { type: 'bool', value: false },
                radius: { type: 'f', value: 0.75 },
                softness: { type: 'f', value: 0.3 },
            },

            vertexShader: [
                'varying vec2 vUv;',

                'void main() {',

                'vUv = uv;',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

                '}',
            ].join('\n'),

            fragmentShader: [
                'uniform sampler2D tDiffuse;',
                'uniform vec2 resolution;',
                'uniform float gain;',
                'uniform float radius;',
                'uniform float softness;',
                'uniform bool horizontal;',

                'varying vec2 vUv;',

                'float rand(vec2 co){',
                'return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);',
                '}',

                'void main() {',
                'vec4 color = texture2D( tDiffuse, vUv );',
                'vec3 c = color.rgb;',
                'float noise = rand(gl_FragCoord.xy) * .05;',

                // determine center
                'vec2 position;',
                'if (horizontal) {',
                'position = (vec2(0, gl_FragCoord.y) / resolution.xy) - vec2(0.5);',
                //"float len = 1.0 - length(position);",
                '} else {',
                'position = (gl_FragCoord.xy / resolution.xy) - vec2(0.5);',
                'position *= resolution.x / resolution.y;',
                '}',

                'float len = length(position) * gain;',

                'float x = gl_FragCoord.x / resolution.x;',
                'gl_FragColor = vec4 ( c * vec3 (smoothstep(radius, radius - softness, len)), 1.0);',
                '}',
            ].join('\n'),
        };

        //@ts-ignore shader import
        const vignette = new RenderPass(this.scene, this.camera);
        this.composer.addPass(vignette);
        const shaderVignette = VignetteShader;
        const effectVignette = new ShaderPass(shaderVignette);

        effectVignette.uniforms['resolution'].value = new THREE.Vector2(
            window.innerWidth,
            window.innerHeight
        );
        effectVignette.uniforms['horizontal'].value = true; // default is false
        effectVignette.uniforms['radius'].value = 0.8; // default is 0.75
        effectVignette.uniforms['softness'].value = 0.3; // default is 0.3
        effectVignette.uniforms['gain'].value = 0.3; // default is 0.9

        this.composer.addPass(effectVignette);
    }

    init(): void {
        const animate = () => {
            const elapsedTime = this.clock.getElapsedTime();
            const deltaTime = elapsedTime - this.previousTime;
            this.previousTime = elapsedTime;

            if (this.mixer !== null) {
                this.mixer?.update(deltaTime);
            }
            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(animate);
        };
        animate();

        this.dracoLoader.setDecoderPath(
            'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'
        ); // use a full url path
        this.loader.setDRACOLoader(this.dracoLoader);

        this.applyShader();
        this.loadmodels();

        let room;
        if (this.type === 'liver' || this.type === 'cube')
            room = require('../models/room/lab.js');

        this.loader.parse(room.lab(), '', (gltf) => {
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.scale.set(1.7, 1.7, 1.7);
            gltf.scene.traverse((child: any) => {
                if (child.material) {
                    if (child.material.map) {
                        child.material.map.encoding = THREE.sRGBEncoding;
                        child.material.format = THREE.RGBAFormat;
                    }
                    if (child.material.emissiveMap)
                        child.material.emissiveMap.encoding =
                            THREE.sRGBEncoding;
                    if (child.material.map || child.material.emissiveMap)
                        child.material.needsUpdate = true;
                }

                if (
                    child.name === 'Sci-Fi_Futuristic_Laboratory_Interior_Room'
                ) {
                    child.children.forEach((child: any) => {
                        child.children.forEach((child: any) => {
                            if (child.isMesh) {
                                child.material.format = THREE.RGBAFormat;
                                child.material.transparent = true;
                                child.material.opacity = 0.65;
                            }
                        });
                    });
                }

                if (child.isMesh) {
                    child.material.transparent = true;
                }
            });

            this.room = gltf.scene;
            this.scene.add(gltf.scene);
        });
    }
}

export { Scene };
