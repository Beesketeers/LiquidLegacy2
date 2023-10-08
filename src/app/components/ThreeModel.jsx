'use client'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect } from 'react'

const ThreeModel = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    tl.fromTo(gltf.scene.scale, { z: 0, x: 0, y: 0 }, { z: 0.02, x: 0.02, y: 0.02 })
    tl.fromTo('.navbar', { y: '-100%' }, { y: '0%' })
    tl.fromTo('.title', { opacity: 0 }, { opacity: 1 })
  }, [])

  const gltf = useLoader(GLTFLoader, '/models/earth.glb')
  gltf.scene.scale.set(0.02, 0.02, 0.02)

  return <primitive object={gltf.scene} />
}

export default ThreeModel
