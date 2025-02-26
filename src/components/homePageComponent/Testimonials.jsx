import React from 'react'
import { BiSolidQuoteSingleLeft } from 'react-icons/bi'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const Testimonials = () => {



  return (
    <div className='padding space-y-8 bg-custom-blue py-14'>
        <div className="flex justify-between items-center">
            <h2 className='head-two text-white'>What peoples says about us </h2>
            <div className="flex items-center gap-4">
                <div className="p-1 bg-white duration-200 hover:bg-custom-orange rounded-full"><RiArrowLeftSLine size={32} /></div>
                <div className="p-1 bg-white duration-200 hover:bg-custom-orange rounded-full"><RiArrowRightSLine size={32} /></div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex-1 p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <FaQuoteLeft size={32} />
                  <div className="flex gap-1 text-custom-orange items-center">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
                <p className="text-gray-600">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident 
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <img src="./public/images/profile.png" alt="User" className="w-16 h-16 rounded-full"/>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">CEO, Company Inc.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Testimonials