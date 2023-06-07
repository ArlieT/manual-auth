import Category from "./Category";

interface CategoryProps{
    initialPlace:boolean
}

export default function CategoryNav({initialPlace}:CategoryProps) {
    console.log({initialPlace})
  return (
    // 
    <div className={`cat-nav flex justify-between mt-6 p-5 border  transition-all   relative inset-0 m-auto    z-[99] ${!initialPlace ? "sticky left-0 mx-auto top-[80px]  w-full shadow bg-white": "w-[100%]"}   `}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
       
    </div>
  )
}
