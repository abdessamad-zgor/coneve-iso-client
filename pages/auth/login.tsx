import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const login = () => {
  const {register, handleSubmit} = useForm()
  const router = useRouter()
  const [authError, setAuthError] = useState<null | string>(null)
  let client = useSupabaseClient()
  async function loginUser(data:any){
    let res = await client.auth.signInWithPassword({email: data?.identifier, password: data?.password})
    if(res.error){
      console.log(res.error)
      setAuthError("incorrect Identifier or password, check your login credentials")
    }
    if(res.data.user && res.data.session){
      router.push("/")
    }

  }
  return (
    <div className="w-full">
      
      <div className="w-full pt-4">
        {
          authError?<div className="w-10/12 md:5/12 pb-2 bg-red-500 font-light text-white m-auto p-2 rounded text-xl">{authError}</div>:""
        }
      <form  className="w-10/12 md:w-5/12 m-auto rounded-md border-2 border-rose-300 shadow-lg px-4" onSubmit={handleSubmit(loginUser)}>
          <div className="">
            <h1 className="text-4xl font-bold text-emerald-700 w-full border-b border-rose-200  py-4">
              Sign in to your account
            </h1>
          </div>
          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("identifier")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="text" placeholder='Phone, Email' />
            <label className="opacity-0 font-light text-emerald-500 transition-all peer-focus:opacity-100" htmlFor="">Phone, Email</label>
          </div>
          
          <div className=" flex-col-reverse w-10/12 m-auto py-2 flex">
            <input {...register("password")} className='border-emerald-100 border-b-2 peer transition:all hover:bg-emerald-100 py-2 px-px rounded' type="password" placeholder="password"  />
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

export default login