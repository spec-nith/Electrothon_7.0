import React from 'react'
import bg from '@/assets/background.png'
import Image from 'next/image'

const MainPg = () => {
  return (
    <div className=''>
      <Image className='h-screen w-screen' src={bg} alt="" />
    </div>
  )
}

export default MainPg
