import { IconType } from "react-icons/lib";
import { MouseEventHandler, ReactNode } from 'react';
interface ButtonProps{
    label:string;
    onClick?:()=>void;
    disabled?:boolean;
    outline?:boolean;
    small?: boolean;
    icon?: ReactNode;
}
export default function Button({label,onClick,disabled,icon:Icon,outline,small}:ButtonProps) {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:opacity-80
      w-full
      text-center
      hover:text-lg transition-all
      flex flex-row items-center justify-center gap-3
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'border-rose-500'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
    `}
  >
   {Icon && <span>{Icon}</span>}
    {label}
  </button>
  )
}
