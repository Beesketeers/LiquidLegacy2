'use client'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { useRouter } from 'next/navigation' // Importa useRouter

const ThreeModel = () => {
  const router = useRouter() // Obtén el objeto router

  const gltf = useLoader(GLTFLoader, '/models/earth.glb')
  gltf.scene.scale.set(0.02, 0.02, 0.02)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    tl.fromTo(gltf.scene.scale, { z: 0, x: 0, y: 0 }, { z: 0.02, x: 0.02, y: 0.02 })
    tl.fromTo('.navbar', { y: '-100%' }, { y: '0%' })
    tl.fromTo('.title', { opacity: 0 }, { opacity: 1 })
  }, [])

  const handleModelClick = () => {
    // Redirige al usuario a la ruta "/location" cuando hagan clic en el modelo
    router.push('/location')
  }

  return (
    <primitive object={gltf.scene} onClick={handleModelClick} /> // Agrega un evento onClick al modelo
  )
}

export default ThreeModel
