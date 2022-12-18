import React, { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import {useForm} from "react-hook-form"
import { useRouter } from 'next/router'

const signup = () => {
  const {register, handleSubmit} = useForm()
  const router = useRouter()
  const client = useSupabaseClient()
  const [authError, setAuthError] = useState<null | string>(null)

  async function signupUser(data:any){
    try {
      let res = await client.auth.signUp({email: data?.email, password: data?.password})
    if(res.error){
      console.log(res.error)
      setAuthError("Something went wrong while processing your request, please check your info and try later")
    }
    if(res.data.user && res.data.session){
      router.push("/auth/confirm-email")
    }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className="w-full">
      
      <div className="w-full pt-4">
        {
          authError?<div className="w-10/12 md:5/12 bg-red-500 font-bold m-auto p-2 rounded text-xl">{authError}</div>:""
        }
      <form className="w-10/12 md:w-5/12 m-auto rounded-md border-2 border-rose-300 px-4" onSubmit={handleSubmit(signupUser)}>
      
          <div className="">
            <h1 className="text-4xl font-bold text-emerald-700 w-full border-b border-rose-200  py-4">
              Create a new account
            </h1>
          </div>
          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex" >
            <input {...register("fullname")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder='Full Name'/>
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Full Name</label>
          </div>
          
          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("email", {required:true})} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder="email"/>
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Email</label>
          </div>

          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("phone-number")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder="Phone Number" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Phone Number</label>
          </div>

          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("password", {required:true})} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="password" placeholder="password" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Password</label>
          </div>

          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("confirm-password", {required: true})} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="password" placeholder="Confirm password" />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Confirm Password</label>
          </div>

          <div className="flex flex-row w-full justify-center py-2">
            <button type="submit"  className="bg-green-700 rounded-md text-white text-xl font-bold px-4 py-2 text-uppercase">login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default signup