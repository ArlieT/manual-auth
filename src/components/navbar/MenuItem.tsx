'use client'
import React from 'react'

interface MenuItemProps{
    onclick:()=>void;
    label:string
}

function MenuItem({label, onclick}:MenuItemProps) {
  return (
    <div onClick={onclick} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
        {label}

    </div>
  )
}

export default MenuItem