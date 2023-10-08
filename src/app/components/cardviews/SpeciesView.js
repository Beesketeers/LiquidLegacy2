import React from 'react'
import CardListItem from './CardListItem'

const speciesView = () => {
  return (
    <div className='py-2 max-h-[300px] overflow-y-hidden w-full flex flex-col gap-2'>
      <CardListItem
        title='Vaquita Marina'
        image='https://laverdadnoticias.com/__export/1599495898288/sites/laverdad/img/2020/09/07/vaquita_marina_peligro_de_extincion_golfo_california_animales_acuaticos.jpg_1849796065.jpg'
        description=''
        status='Endangerous Level:'
        level='high'
      />
      <CardListItem
        title='Vaquita Marina'
        image='https://laverdadnoticias.com/__export/1599495898288/sites/laverdad/img/2020/09/07/vaquita_marina_peligro_de_extincion_golfo_california_animales_acuaticos.jpg_1849796065.jpg'
        description=''
        status='Endangerous Level:'
        level='high'
      />

      <button className='text-indigo-400 underline'>Ver mas</button>
    </div>
  )
}

export default speciesView
