import Link from 'next/link'

const NavBar = ({ bgValue }) => {
  return (
    <div
      className={`navbar select-none flex items-center justify-between w-full bg-[#00204A]${bgValue} backdrop-blur-[1px] px-32 py-3`}>
      <div className='flex items-center gap-1'>
        <img className='w-20 h-20' src='assets/logo.png' alt='Liquid Legacy' />

        <p className='text-3xl text-white font-miniolla'>
          <Link href='/'>Liquid Legacy</Link>
        </p>
      </div>
      <div className='flex gap-6'>
        <button className='flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all'>
          Sobre Nosotros
        </button>
        <button className='flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all'>
          Búsqueda
        </button>
        <button className='flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all'>
          Contacto
        </button>
      </div>
    </div>
  )
}

export default NavBar
