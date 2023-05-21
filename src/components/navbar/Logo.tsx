'use clinet'
import Image from 'next/image'

import React from 'react'
import {useRouter} from 'next/navigation'

function Logo() {
    const router = useRouter()
  return (
   <Image
    alt='logo'
    src='/images/Airbnb-logo.png'
    width={100}
    height={100}
    className='hidden md:block cursor-pointer'
   />
  )
}

export default Logo