/* eslint class-methods-use-this: 0 */
import { find } from 'lodash'
import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

class _TexturesLoader {
    textureLoader = new THREE.TextureLoader()

    testRenderer = new THREE.WebGLRenderer()

    cache: {texture: THREE.Texture, url: string}[] = []

    constructor() {
        this.testRenderer.toneMapping = THREE.LinearToneMapping
        this.testRenderer.toneMappingExposure = 1
    }

    load(url: string): Promise<THREE.Texture> {
        const cached = find(this.cache, { url })

        const loader = this.textureLoader

        return new Promise((resolve, reject) => {
            const returnTexture = (texture: THREE.Texture) => {
                texture.encoding = THREE.sRGBEncoding
                texture.wrapS = THREE.RepeatWrapping
                texture.wrapT = THREE.RepeatWrapping
                texture.needsUpdate = true

                resolve(texture)
            }

            if (cached) {
                returnTexture(cached.texture.clone())
            } else {
                loader.load(
                    url,
                    (texture: any) => {
                        this.cache.push({ url, texture })
                        returnTexture(texture)
                    },
                    undefined,
                    reject
                )
            }
        })
    }

    // async loadVideoTexture(video: string | VideoResource): Promise<VideoTexture>
    // {
    //   let videoResource = null
    //   const video_id = THREE.MathUtils.generateUUID()

    //   if (video instanceof VideoResource) {
    //     videoResource = video
    //   } else {
    //     videoResource = new VideoResource({
    //       url: video,
    //       id: video_id,
    //       type: 'video',
    //     })

    //     await videoResource.load()
    //   }

    //   const _video = videoResource.video as HTMLVideoElement

    //   const texture = new THREE.VideoTexture(_video)

    //   texture.encoding = THREE.sRGBEncoding

    //   return texture
    // }

    loadEnvTexture(
        url: string,
        renderer = this.testRenderer,
        _ext = ''
    ): Promise<THREE.Texture> {
        renderer.toneMapping = THREE.LinearToneMapping
        renderer.toneMappingExposure = 1

        return  new Promise((resolve) => {
            const pmremGenerator = new THREE.PMREMGenerator(renderer)
            pmremGenerator.compileEquirectangularShader()

            const ext = _ext || url.split('.').pop()

            if (ext === 'hdr') {
                new RGBELoader()
                    .setDataType(THREE.UnsignedByteType)
                    .load(url, (texture) => {
                        texture.needsUpdate = true
                        const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(
                            texture
                        )

                        const t = pngCubeRenderTarget.texture

                        resolve(t)
                    })
            } else {
                this.textureLoader.load(url, (texture: any) => {
                    texture.encoding = THREE.sRGBEncoding

                    texture.needsUpdate = true
                    const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(
                        texture
                    )

                    const t = pngCubeRenderTarget.texture

                    resolve(t)
                })
            }
        })
    }
}

export const TexturesLoader = new _TexturesLoader()
