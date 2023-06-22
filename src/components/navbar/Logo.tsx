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
  <div className=''>
    <Image src='/images/logo.png' alt='logo' className=' absolute -top-[20px]' width={70} height={50} />
    {/* <h1 className='text-2xl font-semibold'>Sneaker spot</h1> */}
  </div>
  )
}

export default Logo