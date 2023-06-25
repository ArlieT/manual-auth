'use clinet'
import Image from 'next/image'

import React from 'react'
import {useRouter} from 'next/navigation'

function Logo() {
    const router = useRouter()
  return (
  //  <Image
  //   alt='logo'
  //   src='/images/Airbnb-logo.png'
  //   width={100}
  //   height={100}
  //   className='hidden md:block cursor-pointer'
  //  />
  <div className='hidden md:block relative  overflow-hidden w-48 max-h-[60px] h-24'>
    <Image src='/images/logo-black.png' alt='logo' className='absolute -top-16'  width={200} height={100} />
    {/* <h1 className='text-2xl font-semibold'>Sneaker spot</h1> */}
  </div>
  )
}

export default Logo