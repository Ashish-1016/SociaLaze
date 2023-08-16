import React from 'react'
import TrendingCard from './TrendingCard'
import Recommendations from './Recommendations'
import Search from './Search'

function Trends() {
  return (
    <div className='hidden md:inline-grid sticky  top-0 right-0 bg-black text-white min-h-screen w-full border-l border-gray-800 p-2 space-y-4'>
      <Search />
      <TrendingCard />
      <Recommendations />
    </div>
  )
}

export default Trends
