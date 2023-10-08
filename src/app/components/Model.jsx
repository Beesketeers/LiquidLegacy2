'use client'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/earth.glb')

  console.log(gltf.scene.scale)
  gltf.scene.scale.set(0.02, 0.02, 0.02)

  return <primitive object={gltf.scene} />
}

export default Model
