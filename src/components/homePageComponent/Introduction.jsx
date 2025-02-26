import React from 'react'

const Introduction = () => {
  return (
    <div className='bg-custom-blue py-4 md:py-14 flex max-lg:flex-col max-lg:gap-12 justify-between text-white padding'>
        <div className="lg:w-[45%] space-y-6">
            <h2 className='head-two'>0ur Video Introductions</h2>
            <p className='text-zinc-400'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
            <div className="flex gap-3">
                <div className=" h-32 w-32  md:h-16 md:w-16">
                    <img loading='lazy' className='h-full w-full object-contain' src="./public/images/intro-icon1.png" alt="" />
                </div>
                <div className="space-y-1">
                    <h4 className='text-lg font-semibold'>Explore ideas together</h4>
                    <p className='text-zinc-400'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
            </div>

            <div className="flex gap-3">
                <div className=" h-32 w-32  md:h-16 md:w-16">
                    <img loading='lazy' className='h-full w-full object-contain' src="/images/intro-icon2.png" alt="" />
                </div>
                <div className="space-y-1">
                    <h4 className='text-lg font-semibold'>Bring those ideas to life</h4>
                    <p className='text-zinc-400'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 ">
        <div className="relative lg:aspect-video ">
        <img loading='lazy' className='h-full w-full object-contain' src="/images/intro-video.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Introduction