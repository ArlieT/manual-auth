'use client'
import React from 'react'
import { useForm, Resolver, SubmitHandler } from "react-hook-form";

export default function Admin() {
    const {register,setError,handleSubmit} =useForm();
    const onSubmit = ()=>{

    }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <form   onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 rounded border p-5'>
            <div className='flex flex-col'>
            <label htmlFor="id">id</label>
            <input type="text"  id='id' className='px-3 py-1 border focus:outline-none'/>
            </div>
            {/* Name */}
            <div className='flex flex-col'>
            <label htmlFor="name">Name</label>
            <input type="text"  id='name' className='px-3 py-1 border focus:outline-none'/>
            </div>
            {/* description */}
            <div className='flex flex-col'>
            <label htmlFor="description">id</label>
            <textarea  id='description' className='px-3 py-1 border focus:outline-none'/>
            </div>

             {/* Price */}
             <div className='flex flex-col'>
            <label htmlFor="pricd">Price</label>
            <text  type='number' id='price' className='px-3 py-1 border focus:outline-none'/>
            </div>

              {/* Price */}
            <div className='flex flex-col'>
            <label htmlFor="pricd">Price</label>
            <text  type='number' id='price' className='px-3 py-1 border focus:outline-none'/>
            </div>



        </form>
    </div>
  )
}

