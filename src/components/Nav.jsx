import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const Nav = () => {
  return (
    <div className='pt-8 flex justify-between px-1 md:px-12'>
        <span className=' w-40 md:w-48'>
            <img className='h-full w-full object-contain' src="./public/images/logo.png" alt="Company Logo" />
        </span>
        <div className="flex max-md:hidden items-center gap-10">
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
    </div>
  )
}

export default Nav