import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center  h-15 rounded'>
      <h1 className='text-3xl  ml-1.5'>Todos App</h1>
      <div>
        <NavLink to="/register">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-2.5">Sign up</button>
        </NavLink>
        <NavLink to="/login">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-2.5">Sign in</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Header
