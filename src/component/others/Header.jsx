import React from 'react'

const Header = () => {
  return (
    <div className='flex item-end justify-between'>
     <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Harshit👋</span></h1>
     <button className='bg-red-600 text-white px-5 py-1 rounded-3xl h-10 text-lg font-medium active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
