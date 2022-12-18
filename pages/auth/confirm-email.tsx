import React from 'react'
import {useUser} from "@supabase/auth-helpers-react"

const confirmEmail = () => {
  let user = useUser()
  return (
    <div className="w-full text-center font-light text-lg ">
      Please Check your email <p className="font-bold">{user?.email}</p> for our confirmation email
    </div>
  )
}

export default confirmEmail