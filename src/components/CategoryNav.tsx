import { ReactNode } from "react";
import Category from "./Category";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

interface CategoryProps {
  initialPlace?: boolean;
  options?: string;
}

export default function CategoryNav({ initialPlace, options }: CategoryProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  console.log({ initialPlace });
  return (
    <div ref={emblaRef}
      className={`embla p-[1.6rem]  flex w-full border border-red-500 justify-between sticky top-0 ${
        !initialPlace ? "shadow bg-white" : ""
      }`}
    >
      <div className="overflow-hidden flex touch-pan-y  ml-2" >
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
    </div>
  );
}
