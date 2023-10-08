import React from 'react'
import CardListItem from './CardListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const ContributionView = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(true)
  }

  return (
    <div
      className='py-2 max-h-[300px] overflow-y-scroll max-w-max}
         flex flex-col gap-2'>
      <button
        className='flex items-center justify-center w-full px-4 py-2 border border-gray-400 bg-gray-100 hover:bg-gray-200 transition-all rounded gap-2'
        onClick={handleClick}>
        <FontAwesomeIcon className='aspect-square' icon={faPenToSquare} />
        Agrega un comentario
      </button>
      <CardListItem
        title='Juan Perez'
        extra='user@example.com'
        image='https://randomuser.me/api/portraits/men/17.jpg'
        description='hola soy juan y me gusta la naturaleza y quiero ayudar a cuidarla'
      />
      <CardListItem
        title='Olivia Rodriguez'
        extra='persona2@gmail.com'
        image='https://randomuser.me/api/portraits/women/17.jpg'
        description='hola soy olivia me gusta mucho escuchar a los pajaros y quiero ayudar a cuidarlos'
      />
      <CardListItem
        title='Pedro Sanchez'
        extra='pedro@correo.com'
        image='https://randomuser.me/api/portraits/men/19.jpg'
        description='hola soy pedro y me gusta mucho el agua y quiero ayudar a cuidarla'
      />
    </div>
  )
}

export default ContributionView
