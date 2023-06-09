import Image from 'next/image';
import { BiBed } from 'react-icons/bi';


export default function Category() {
  return (
    <div className='embla__slide w-screen pl-[1rem] relative  border border-red-500 mx-2 flex flex-col items-center'>
       <div className="embla__slide__number w-[4.6rem] h-[4.6rem] z-10 top-[0.6rem] right-[0.6rem] border-[50%] font-bold pointer-events-none">
                <span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text block absolute inset-0'>{1}</span>
              </div>
              <Image src='/images/Airbnb-logo.png' fill alt=''/>
          <BiBed size={22} className='embla__slide__img'/>
    <p>Rooms</p>
    </div>
  )
}

