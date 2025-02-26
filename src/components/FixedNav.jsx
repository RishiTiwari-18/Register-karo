import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { IoIosCall, IoMdMail } from 'react-icons/io'

const FixedNav = () => {
  return (
    <div className=' fixed w-full flex-wrap flex justify-center  md:justify-end bg-custom-blue z-50 text-sm items-center gap-4 py-1 text-white md:pr-14 '>
      <h4 className='flex items-end gap-2'><IoMdMail size={14} />www.registerkaro.in</h4>
      |
      <h4 className='flex items-center gap-1'> <IoIosCall size={16} /> +918447746183</h4>
      |
      <ul className="flex items-center gap-4">
        {[<FaInstagram />, <FaFacebook />, <FaTwitter />, <FaPinterest />].map((item, index)=>(
          <li className='text-base' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FixedNav