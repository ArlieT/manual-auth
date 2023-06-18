import Image from 'next/image';
import { BiBed } from 'react-icons/bi';


function Category({ categoryNumber }:any) {
  // Sample content for each category
  const categoryData = [
    {
      image: '/images/category1.jpg',
      title: 'Category 1',
    },
    {
      image: '/images/category2.jpg',
      title: 'Category 2',
    },
    // Add more category data objects here
  ];

  return (
    <div className='embla__slide w-screen pl-[1rem] relative border border-red-500 mx-2 flex flex-col items-center'>
      <div className={`embla__slide__number w-[4.6rem] h-[4.6rem] z-10 top-[0.6rem] right-[0.6rem] border-[50%] font-bold pointer-events-none bg-gradient-to-r from-${categoryData.iconColor}-500 to-${categoryData.iconColor}-700`}>
        <span className='bg-clip-text block absolute inset-0'>{categoryNumber}</span>
      </div>
      <Image src={categoryData.image} alt='' />
      <BiBed size={categoryData.iconSize} className='embla__slide__img' />
      <p>{categoryData.title}</p>
    </div>
  );
}

export default Category