import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='md:px-36 bg-gray-900 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Empowering learners worldwide with cutting-edge courses, expert instructors, and seamless learning experiences. Unlock your potential and start your journey today!</p>
        </div>
        
        <div className='flex flex-col items-center md:items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>The latest news, articles and resources, sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="text" placeholder='Enter your Email' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder:gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            <button className='bg-orange-600 w-24 h-9 text-white rounded'>Sunscribe</button>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © Jbcodes. All right Reserved.</p>
    </footer>
  )
}

export default Footer
