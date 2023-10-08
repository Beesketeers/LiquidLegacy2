'use client'
import React, { useState } from 'react'
import AboutView from './cardviews/AboutView'
import SpeciesView from './cardviews/SpeciesView'
import ContributionView from './cardviews/ContributionView'

const LocationView = ({ setIsModalMenuOpen }) => {
  const [selectView, setSelectView] = useState('about')

  const handleButtonClick = (button) => {
    setSelectView(button)
  }

  const handleDeeperButtonClick = () => {
    setIsModalMenuOpen(true)
  }

  return (
    <div className='max-w-md min-h-[700px] max-h-[900px] bg-white border border-[#00000073] shadow-lg rounded-xl'>
      <img
        className='w-full rounded-t-xl'
        src='https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3167db28-8744-4096-9d14-233ab6f29bbf%2F8778ac97-b830-4077-bc24-1a632db26286%2Fplaya_pelicanos.jpg?table=block&id=26aeb8c1-d5b6-42e6-a08f-c0a6c19cdb5d&spaceId=3167db28-8744-4096-9d14-233ab6f29bbf&width=2000&userId=1a81e643-c488-4908-9aed-07c39e122322&cache=v2'
        alt=''
      />

      <div className='py-8 px-12 min-h-fit'>
        <h2 className='text-2xl font-bold mb-2'>Playa Pelicano</h2>
        <h3 className='text-xl mb-4 text-[#A7A7A7]'>Puerto peñasco, Sonora (MEX)</h3>
        <h4>Water Quality 🟢</h4>

        <div className='flex gap-4 mx-auto py-2'>
          <button
            className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
              selectView === 'about' ? 'bg-[#3F9F7F]' : 'bg-[#FFFAFF]'
            }`}
            onClick={() => handleButtonClick('about')}>
            About
          </button>
          <button
            className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
              selectView === 'species' ? 'bg-[#3F9F7F]' : 'bg-[#FFFAFF]'
            }`}
            onClick={() => handleButtonClick('species')}>
            Species
          </button>
          <button
            className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
              selectView === 'contribution' ? 'bg-[#3F9F7F]' : 'bg-[#FFFAFF]'
            }`}
            onClick={() => handleButtonClick('contribution')}>
            Contribution
          </button>
        </div>
        {selectView === 'about' ? (
          <AboutView />
        ) : selectView === 'species' ? (
          <SpeciesView />
        ) : (
          <ContributionView onButtonClick={handleDeeperButtonClick} />
        )}
      </div>
    </div>
  )
}

export default LocationView
