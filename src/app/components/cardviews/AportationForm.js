'use client'
import React, { useState } from 'react'

const AutorizationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='p-8 border rounded-3xl  bg-white w-full h-full'>
      <h2 className='text-xl mb-4 font-bold'>Formulario de Comunidad</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>
            Nombre
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nombre'
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='mensaje'>
            Mensaje
          </label>
          <textarea
            className=' h-full resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-scroll'
            id='mensaje'
            placeholder='Escribe tu mensaje aquí'
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-[#3F9F7F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AutorizationForm
