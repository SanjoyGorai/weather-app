import React from 'react'
import sun from '../images/sun.png'

const Navbar = () => {
  return (
    <>
      <nav className='bg-sky-400 flex items-center'>
        <img src={sun} alt="sun" className='w-20 bg-green-500' />
        <ul className='flex gap-10  bg-red-300'>
          <li className=''><a href="">Home</a></li>
          <li className=''><a href="" >About</a></li>
          <li><a href="">Wrather</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar