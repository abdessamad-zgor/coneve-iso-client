import React from 'react'
import {useForm} from "react-hook-form"

const signup = () => {
  const {register, handleSubmit} = useForm()

  function onSubmit(){
    
  }
  return (
    <div className="w-full">
      <h1 className="font-bold text-6xl py-4 border-b-2 border-rose-600 text-emerald-700">
        Login
      </h1>
      <div className="w-full pt-4">
      <form action="" className="w-10/12 md:w-6/12 m-auto rounded-md border border-stone-100 shadow px-4">
          <div className="">
            <h1 className="text-2xl text-emrald-500 w-full border-b border-emerald-200  py-4">
              Sign in to your account
            </h1>
          </div>
          <div className=" flex-col-reverse flex">
            <input {...register("identifier")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder='Phone, Email' name="identifier" id="" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Phone, Email</label>
          </div>
          
          <div className=" flex-col-reverse flex">
            <input {...register("password")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="password" placeholder="password" name="" id="" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">password</label>
          </div>
          <div className="flex flex-row w-full justify-center py-2">
            <button type="submit" className="bg-green-700 rounded-md text-white text-xl font-bold px-4 py-2 text-uppercase">login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default signup