'use client'
import { useState, Suspense } from 'react'

import ThreeScene from './components/ThreeScene'
import ThreeModel from './components/ThreeModel'
import { OrbitControls, Stars } from '@react-three/drei'
import NavBar from './components/NavBar'
import LocationCard from './components/LocationCard'
import AportationForm from './components/cardviews/AportationForm'
import gsap from 'gsap'

export default function Home() {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false)
  const [action, setAction] = useState('location')
  const [modelFront, setModelFront] = useState(false)
  const [rotateEnabled, setRotateEnabled] = useState(true)

  function toggleModalPopup(currentAction) {
    setIsModalMenuOpen((prev) => !prev)
    if (currentAction) {
      setAction(currentAction)
    }
  }

  function ChangeModalForAportation() {
    setAction('aportation')
  }

  const ModalMenu = () => {
    return (
      <div
        className='fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center bg-black bg-opacity-50'
        onClick={() => {
          toggleModalPopup(undefined)
        }}>
        <div
          onClick={(event) => {
            event.stopPropagation()
          }}>
          {action === 'location' ? <LocationCard onDeeperButtonClick={ChangeModalForAportation} /> : <AportationForm />}
        </div>
      </div>
    )
  }

  const hideTitle = (e) => {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    tl.fromTo('.title', { opacity: 1 }, { opacity: 0 })
    setModelFront(true)
    setRotateEnabled(false)
  }

  return (
    <>
      <div className='absolute w-full h-screen'>
        <ThreeScene>
          <color attach='background' args={['#00204a']} />
          {/* <ambientLight intensity={0.3} /> */}
          <hemisphereLight intensity={1} />
          {/* <directionalLight intensity={0.5} position={[0, 10, 0]} /> */}
          <OrbitControls autoRotate={rotateEnabled} enableZoom={false} enablePan={false} />
          <Suspense fallback={null}>
            <ThreeModel />
          </Suspense>
          <Stars />
        </ThreeScene>
      </div>
      <NavBar bgValue='/20' />
      {isModalMenuOpen ? <ModalMenu /> : null}
      <main className='flex min-h-screen abso flex-col z-10'>
        <div className={`flex flex-col ${modelFront ? '-z-100' : 'z-20'}`}>
          <div className='flex min-w-fit h-[calc(100vh-104px)]'>
            <div className='title flex items-center justify-center flex-col min-h-fit w-2/5 p-32 gap-8'>
              <p className='text-[24px] sm:text-sm md:text-md lg:text-lg xl:text-5xl text-white font-semibold min-h-fit'>
                Saving the world, one drop at a time
              </p>
              <p className='text-[16px] sm:text-sm md:text-md lg:text-lg xl:text-xl text-gray-400 '>
                Descubre y aprende sobre los distintos cuerpos de agua que existen en el mundo.
              </p>
              <button
                disabled={modelFront}
                className={`text-[16px] sm:text-sm md:text-md lg:text-lg w-full bg-green hover:bg-green/80 text-white py-4 rounded transition-all`}
                onClick={(e) => {
                  hideTitle(e)
                  console.log(e)
                  // toggleModalPopup('location')
                }}>
                Comienza a explorar
              </button>
            </div>
            <div className='flex items-center justify-center w-3/5'>earth</div>
          </div>
          <div className='flex flex-col items-center justify-center py-8 bg-black'>
            <p className='text-[14px] sm:text-sm md:text:md lg:text-lg text-white font-semibold'>
              Con el apoyo de las siguientes organizaciones:
            </p>
            <div className='flex h-40 items-center justify-center gap-5'>
              <img className='w-24 invert aspect-auto' src='/assets/org3.png' alt='org' />
              <img className='w-24 invert aspect-auto' src='/assets/org1.png' alt='org' />
              <img className='w-24 invert aspect-auto' src='/assets/org5.png' alt='org' />
              <img className='w-24 invert aspect-auto' src='/assets/org2.png' alt='org' />
              <img className='w-24 invert aspect-auto' src='/assets/org4.png' alt='org' />
              <img className='w-24 invert aspect-auto' src='/assets/org6.png' alt='org' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
