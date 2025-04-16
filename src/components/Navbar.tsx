import React from 'react'

function Navbar() {
  return (
    <nav className='navbar bg-red-400'>
        <h1 className='font-bold text-2xl'>PEDNBD</h1>
        <ul className='flex flex-row justify-between items-center gap-2 font-semibold'>
            <li className='mx-4 min-w-fit px-10 bg-green-600'>Home</li>
            <li className='mx-4 min-w-fit px-10 bg-green-600'>Games</li>
            <li className='mx-4 min-w-fit px-10 bg-green-600'>DLL</li>
        </ul>
        <button>Contact Me</button>
    </nav>
  )
}

export default Navbar