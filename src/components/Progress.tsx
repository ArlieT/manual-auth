import React from 'react'

export default function Progress() {
  return (
    <div className=' flex items-center justify-center my-12 w-full h-[10px] gap-1'>
        {/* circle */}
        <div className='relative'>
         <div className='  w-[14px] h-[14px] bg-black rounded-full'>
        </div>
        <p className='absolute top-6 -left-[24px] font-bold'>Confirmation</p>
        </div>
        <div className='w-[20%] h-full bg-black rounded-full'>
        </div>
         {/* circle */}
         <div className='relative'>
         <div className='  w-[14px] h-[14px] bg-black rounded-full'>
        </div>
        <p className='absolute top-6 -left-[24px] font-bold'>Payment</p>
        </div>
        {/* line */}
        <div className='w-[20%] h-full bg-black rounded-full'>
        </div>
         {/* circle */}
         <div className='relative'>
         <div className='  w-[14px] h-[14px] bg-black rounded-full'>
        </div>
        <p className='absolute top-6 -left-[24px] font-bold'>Delivery</p>
        </div>

        {/* line */}
        <div className='w-[20%] h-full bg-stone-300 rounded-full'>
        </div>

        <div className='relative'>
         <div className='  w-[14px] h-[14px] bg-black rounded-full'>
        </div>
        <p className='absolute top-6 -left-[24px] font-bold'>Finish</p>
        </div>
    </div>
  )
}
