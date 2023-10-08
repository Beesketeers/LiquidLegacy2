'use client'
import React from 'react'
import LocationCard from '../components/LocationCard'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import AutorizationForm from '../components/cardviews/AportationForm'

const page = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false)
  return (
    <>
      <NavBar bgValue='' />
      <div className='flex gap-6 p-6'>
        <LocationCard setIsModalMenuOpen={setIsModalMenuOpen} />

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.5141459838624!2d-113.6434778246952!3d31.344788374294822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812bb09e4758f89b%3A0x9ccf7b9cdfde5195!2sPlaya%20Pel%C3%ADcano!5e0!3m2!1ses-419!2smx!4v1696796430799!5m2!1ses-419!2smx'
          width='100%'
          height='800'
          allowfullscreen=''
          className='rounded'
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>

      {isModalMenuOpen ? <AutorizationForm /> : null}
    </>
  )
}

export default page
