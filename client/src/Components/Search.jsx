import React from 'react'

function Search() {
  return (
    <div className='h-[6vh] bg-gray-500/50  rounded-2xl w-full p-2 focus-within:border border-blue-600 focus-within:bg-black'>
      <input className='w-full bg-transparent outline-none ml-2 text-white' type='search' placeholder='Search Social Blaze' />
    </div>
  )
}

export default Search
