import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <section className='lg:flex justify-between bg-pink-100'> 
      <div className='w-[50%] flex flex-col items-start justify-center m-auto pl-18'>
        <h2 className='font-bold text-xl'>NEW ARRIVALS ONLY</h2>
        <div className='flex gap-3'>
          <h2 className='font-semibold text-7xl'>new </h2>
          <img className='w-[66px]' src={hand_icon} alt="hand icon" /> 
        </div>
        <h2 className='font-semibold text-7xl' > collections <br /> for everyone </h2>
        <div className='bg-red-500 flex p-3 px-7 items-center rounded-3xl mt-5 gap-3'>
          <button className='text-white' >Latest Collection </button>
          <img className='w-[20px] h-[10px]' src={arrow} alt="arrow" />
        </div>
      </div>
      <div  className='w-[40%]'>
        <img className='w-[77%]' src={hero} alt="hero Image" />
      </div>
    </section>
  )
}

export default Hero
