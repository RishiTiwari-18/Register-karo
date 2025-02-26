import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const ManageService = () => {
  return (
    <div className='padding flex justify-between max-md:flex-col bg-custom-blue'>
      <div className="md:w-[45%] text-white space-y-8 py-14">
        <h3 className='head-two'>Manage Your Services by your
        Mobile Phone</h3>
        <p className='text-zinc-400'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>

        <div className="space-y-3">
          <h5>Get the App</h5>
          <div className="flex items-center text-black gap-3">
            <button className='px-4 h-12 rounded-md bg-white flex items-center gap-2'><FaApple size={30} />App Store</button>
            <button className='px-4 h-12 rounded-md bg-white flex items-center gap-2'><FaGooglePlay size={24} />Google Play</button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:h-[60vh] py-4 overflow-hidden px-4">
        <img loading='lazy' src="/images/mobile.png" alt="" />
      </div>
    </div>
  )
}

export default ManageService