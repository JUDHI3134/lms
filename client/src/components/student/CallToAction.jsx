import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='sm:text-sm text-gray-500'>Transform your ideas into reality! Join us today for unmatched solutions, seamless experiences, and results that exceed expectations.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='py-3 px-10 rounded-md text-white bg-orange-600'>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default CallToAction
