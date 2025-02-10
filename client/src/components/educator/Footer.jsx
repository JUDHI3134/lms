import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 bordert">
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt="" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='py-4 text-xs text-center md:text-sm text-gray-500'>Copyright 2025 © jbcodes. All Right Reserved.</p>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href=""><img src={assets.facebook_icon} alt="facebook_icon" /></a>
        <a href=""><img src={assets.instagram_icon} alt="instagram_icon" /></a>
        <a href=""><img src={assets.twitter_icon} alt="twitter_icon" /></a>
      </div>
    </footer>
  )
}

export default Footer
