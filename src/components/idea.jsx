import React, { useEffect } from 'react'

const Idea = (text) => {
  return (
    <div className='font-comic p-3 sm:p-5 gap-5 hover:bg-indigo-100 hover:border-b-4 sm:gap-9 rounded-xl items-center flex justify-between w-full border-2 border-gray-400 mb-2 text-base sm:text-2xl'>
        <a href='/business' className='truncate' >
            {text.text}
        </a>
        <button className='border-2 border-gray-300 rounded-xl text-sm sm:text-lg p-1'>
            🗑️
        </button>
    </div>
  )
}

export default Idea