import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { RiMenu3Fill } from 'react-icons/ri'

const Nav = () => {
  return (
    <div className=' pt-16 md:pt-8 flex items-center justify-between px-1 md:px-12'>
        <span className=' w-40 md:w-48'>
            <img className='h-full w-full object-contain' src="/images/logo.png" alt="Company Logo" />
        </span>
        <div className="flex max-lg:hidden items-center gap-10">
            <ul className='flex items-center gap-10 text-base'>
            {["Home", "Our Services" ,"Blog", "Contact Us", "About us" ].map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <div className="flex items-center gap-10">
            <IoSearch size={20} />
            <button className='btn bg-custom-orange'>Talk En Expert</button>
            </div>
        </div>
        <div className="lg:hidden">
        <RiMenu3Fill size={22} />
        </div>
    </div>
  )
}

export default Nav