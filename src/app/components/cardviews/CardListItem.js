const CardListItem = ({ title, extra, image, description, level, status }) => {
  return (
    <div className='flex items-center w-full p-2  rounded gap-2 '>
      <img className='aspect-square w-24 rounded border border-gray-400 self-start' src={image}></img>
      <div className='break-words'>
        <div className={`${title && extra ? 'py-2' : ''}`}>
          <p className='font-semibold text-lg'>{title}</p>
          <p className='text-sm text-gray-400'>{extra}</p>
          {level && (
            <>
              <p className='text-sm text-gray-800'>
                Endangered level:
                {status && <span className='bg-red-800 text-white p-1 rounded-full font-light mx-1 px-5'>{level}</span>}
              </p>

              <button className='text-lime-800 underline '>Mas información</button>
            </>
          )}
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardListItem
