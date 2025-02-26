import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaCirclePlay } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div
    style={{backgroundImage: "url('./public/images/hero-background.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}
    className=' w-full flex padding justify-between max-md:flex-col pt-8 md:pt-14'>
        <div className=" md:w-1/2 space-y-6 py-8">
            <span className='flex gap-2 items-center'>Google Rating
                <span className='flex gap-1 text-custom-orange items-center'>{Array(5).fill().map((_, i) => <FaStar size={15} key={i} />)}</span>
            </span>
            <h1 className='text-5xl leading-[3.4rem]'>Your Trusted Partner <br /> for compliance business needs</h1>
            <span className='text-pink-600 font-bold'>_________</span>
            <p className='text-lg text-zinc-600'>An online business compliance platform that helps entrepreneurs and other individuals with various, <b>registrations, tax filings,</b> and other <b>legal matters.</b></p>
            <div className="md:w-[80%] -z-10 h-14">
                <img className='h-full  w-full object-contain' src="./public/images/hero-icons.png" alt="" />
            </div>
            <div className="flex gap-6">
                <button className='bg-custom-blue btn'>Talk An Expert</button>
                <div className="flex items-center gap-2">
                <span className='text-red-500'><FaCirclePlay size={22} /></span>
                See How it works
                </div>
            </div>
        </div>
        <div className="md:w-[45%] relative ">
            <img className='h-full w-[100%] object-contain' src="./public/images/hero-img.png" alt="" />
            <div className=" -z-10 absolute -right-16 max-md:hidden top-0 text-black flex flex-col gap-6">
                <div className="hero-tags ">Annual Compliance</div>
                <div className="hero-tags ">Payroll Services</div>
                <div className="hero-tags ">Company Formation</div>
                <div className="hero-tags ">Annual Compliance</div>
            </div>
        </div>
    </div>
  )
}

export default Hero