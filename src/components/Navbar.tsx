"use client";
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-950 text-white h-12 py-2 px-14 flex justify-between items-center'>
            <div>
             <h1 className='text-2xl font-bold'>
              <a href='#!'> Online Lessons </a>
              </h1>
             </div>
            <div>
              <ul className='flex space-x-16'>
              <li><Link href="/home" className='hover:text-blue-400 font-semibold'>Home</Link></li>
                <li><Link href="/aboutus" className='hover:text-blue-400 font-semibold'>About Us</Link></li>
                <li><Link href="/ourservices"className='hover:text-blue-400 font-semibold'>Our Services</Link></li>
                <li><Link href="/assignments"className='hover:text-blue-400 font-semibold'>Assignments</Link></li>
                <li><Link href="/contact"className='hover:text-blue-400 font-semibold'>Contact</Link></li>
                <li><Link href="/login" className='hover:text-blue-400 font-semibold'>Log In</Link></li>
              </ul>
            </div>
            
        </nav>

    </div>
  )
}

export default Navbar