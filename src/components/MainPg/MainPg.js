import React from 'react'
import bg from '@/assets/background.png'
import Image from 'next/image'
import Navbar from '@/components/MainPg/Navbar'
import logo from '@/assets/speclogo.png'
import '@/app/globals.css'
import register from '@/assets/registericon.png'
import hourglass from '@/assets/hourglass.png'

const MainPg = () => {

  return (
    <div className='bg-cover w-full h-screen bg-center -z-0' >
      <Navbar />
      <div className='flex items-center justify-center lg:space-y-12 space-y-20 h-[89.9%] flex-col'>
        <div className='flex w-full flex-col items-center justify-center'>
          <span className='text-[150px] px-3 pirata-one-regular lg:leading-none max-lg:text-[120px] max-md:text-[80px] max-sm:text-[60px] text-center'>
            ELECTROTHON 7.0
          </span>
          <span className='text-[50px] macondo-swash-caps-regular lg:leading-none max-lg:text-[40px] max-md:text-[30px] max-sm:text-[23px] text-center'>
            Collosseum of Code
          </span>
        </div>
        <button className='lg:text-[28px] sm:text-[24px] text-[18px] flex space-x-3 bg-[#3770FF] items-center justify-center font-[600] inter px-6 py-2 rounded-full'>
          <Image className='sm:w-[30px] w-[23px]' src={register} alt='' width={35} height={35} />
          <span className='text-center'>
            Register Here
          </span>
        </button>
        <div className='flex justify-center md:space-x-5 items-center w-full'>
          <Image className='max-sm:w-[70px] max-md:w-[100px] max-lg:w-[85px]' src={hourglass} alt='' width={130} />
          <div className='flex flex-col items-center justify-center'>
            <div className='lg:text-[65px] md:text-[53px] sm:text-[40px] text-[40px] island-moments-regular leading-none text-center'>Time Left To Register</div>
            <div className='lg:text-[110px] md:text-[95px] sm:text-[80px] text-[60px] abhaya-libre-regular text-[#727968] sm:leading-[55px] leading-[40px] lg:leading-[75px] text-center'>00:00:00</div>
          </div>
          <Image className='max-sm:w-[70px] max-md:w-[100px] max-lg:w-[85px]' src={hourglass} alt='' width={130} />
        </div>
      </div>
    </div>
  )
}

export default MainPg
