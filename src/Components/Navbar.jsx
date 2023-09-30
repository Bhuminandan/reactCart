import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-neutral-900 flex items-center justify-between gap-2 md:px-20'>
      <div className="left">
      <NavLink  className="logo text-white font-bold text-xl" to={'/'}>Shopping cart</NavLink>
      </div>
      <div className="right flex items-center justify-center gap-4">
        <NavLink className=' text-white font-medium text-sm md:text-xl' to={'/'}>Home Page</NavLink>
        <NavLink className=' text-white font-medium text-sm md:text-xl' to={'/cart'}>Cart Page</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar