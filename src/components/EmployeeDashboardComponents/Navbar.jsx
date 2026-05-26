import React from 'react'

const Navbar = ({logo, name}) => {
  const logout = () => {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
  }
  return (
    <div className='flex items-center justify-between px-5 border-b border-b-gray-200 py-2'>
        <div className='flex items-center gap-2 '>
        <div className='bg-green-700 text-white font-medium p-1 rounded-lg'>{logo}</div>
        <h4 className=''>{name}</h4>
        </div>
        <button className='bg-green-700 text-white font-medium p-1 rounded px-2' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar