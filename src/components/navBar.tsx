import React from 'react'
import { LuMenu } from 'react-icons/lu'

const NavBar = () => {
  return (
    <div className='container pt-8 text-white bg-[#005F5F] sm:w-full p-4'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>
                Nahyan Laurent
            </div>
            <div className='flex'>  
  <ul className='list-none gap-10 lg:gap-12 hidden md:flex'>
    <li className='menuLink'><a href='#hero'>Home</a></li>
    <li className='menuLink'><a href='#about'>About</a></li>
    <li className='menuLink'><a href='#projects'>Projects</a></li>
    <li className='menuLink'><a href='#skills'>Skills</a></li>
    <li className='menuLink'><a href='#contact'>Contact</a></li>
  </ul>
</div>
<LuMenu  className='md:hidden' size={30}/>

        </div>
    </div>
  )
}

export default NavBar