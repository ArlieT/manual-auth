import Category from "./Category";

interface CategoryProps{
    initialPlace:boolean
}

export default function CategoryNav({initialPlace}:CategoryProps) {
    console.log({initialPlace})
  return (
    <div className={`flex justify-between sticky top-0 ${!initialPlace ? "shadow bg-white": ""}`}>
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
