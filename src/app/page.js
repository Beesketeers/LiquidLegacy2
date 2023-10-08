'use client'

import { Suspense } from 'react'
import ThreeScene from './components/ThreeScene'
import Model from './components/Model'

import { OrbitControls, Stars } from '@react-three/drei'

export default function Home() {
  return (
    <main className='h-screen  p-0 m-0'>
      <ThreeScene>
        <color attach='background' args={['#00204a']} />
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={1} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <OrbitControls autoRotate />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Stars />
      </ThreeScene>
    </main>
  )
}
