import React from 'react'
import Image from "next/image"
import {useForm} from "react-hook-form"

const Checkout = () => {
  const {register, handleSubmit} = useForm()
  return (
    <div className="w-full">
      <h1 className="font-bold text-6xl py-4 border-b-2 border-rose-600 text-emerald-700">
        Checkout
      </h1>
      <div className='w-full flex flex-row gap-4 px-4 items-start pt-4'>
      <div className="basis-8/12 flex">
        <form action="" className="w-full w-10/12 m-auto rounded-md shadow-md border border-stone-100 px-4">
          <div className="">
            <h1 className="text-2xl text-emrald-500 w-full border-b border-emerald-200  py-4">
              Shipping Details
            </h1>
          </div>
          <div className=" flex-col-reverse flex">
            <input className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder='Full Name' name="fullname" id="" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Full Name</label>
          </div>
          <div className="flex py-2 flex-row gap-2">
            <div className="basis-1/2 flex-col-reverse flex">
              <input className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder="Phone Number" name="" id="" />
              <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Phone Number</label>
            </div>

            <div className="basis-1/2 flex-col-reverse flex">
              <input className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder='Email' name="" id="" />
              <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Email</label>
            </div>
          </div>
          <div className=" flex-col-reverse flex">
            <input className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder="address" name="" id="" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Address</label>
          </div>
          <div className="flex flex-row w-full justify-end">
            <button type="submit" className="bg-green-400 text-stone-600 text-xl font-bold ">Save</button>
          </div>
        </form>
      </div>
      <div className="basis-4/12 border border-stone-100 shadow-md m-4 gap-3 md:m-auto md:w-10/12 divide-y">
      <div className="">
            <h1 className="text-2xl px-4 text-emrald-500 w-full border-b border-emerald-200  py-4">
              Order Summary
            </h1>
          </div>
        <div className="flex flex-row w-full gap-4 drop-shadow-md border border-stone-200 rounded py-2 px-4">
          <Image
            src="https://picsum.photos/300"
            alt=""
            className="rounded "
            width={100}
            height={100}
          />
          <div className="px-2 py-4 relative">
            <p className="text-ellipsis text-xl md:text-2xl px-2  text-stone-500">Toner Rice</p>
            <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>34</span>. 44  MAD</p>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4 drop-shadow-md border border-stone-200 rounded py-2 px-4">
          <Image
            src="https://picsum.photos/300"
            alt=""
            className="rounded "
            width={100}
            height={100}
          />
          <div className="px-2 py-4 relative">
            <p className="text-ellipsis text-xl md:text-2xl px-2  text-stone-500">Toner Rice</p>
            <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>34</span>. 44  MAD</p>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4 drop-shadow-md border border-stone-200 rounded py-2 px-4">
        
          <Image
            src="https://picsum.photos/300"
            alt=""
            className="rounded "
            width={100}
            height={100}
          />
          <div className="px-2 py-4 relative">
            <p className="text-ellipsis text-xl md:text-2xl px-2  text-stone-500">Toner Rice</p>
            <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>34</span>. 44  MAD</p>
          </div>
        </div>
        <div className="w-full flex bg-emerald-600 flex-row p-4 text-white justify-between">
          <h1 className="text-2xl font-bold">Total:</h1>
          <span className="font-bold text-3xl">400<span className="font-light font-mono">.00 MAD</span></span>
        </div>

      </div>

    </div>
    </div>
    
  )
}

export default Checkout