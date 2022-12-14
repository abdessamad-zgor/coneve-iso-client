import Image from "next/image"
import { useState } from "react"
import logo from "../public/asoul_logo.png"
import { Carticon, Usericon, Hearticon, Barsicon } from "../icons"
import Dropdown from "./Dropdown"
import Link from "next/link"

const Appbar = () => {
  let [activeCart, setActiveCart] = useState(false);
  let [activeUser, setActiveUser] = useState(false);
  let [activeWishlist, setActiveWishlist] = useState(false);
  return (
    <header className=''>
      <nav className="py-2 px-8 flex flex-row justify-between md:justify-start items-center border-b-2 border-stone-700">
        <div className="basis-2/12 flex ">
          <Link href="/"><Image
            src={logo}
            alt="logo"
            width={80}
          /></Link>
          
        </div>
        <input type="text" className="mr-2 bg-stone-100 rounded px-4 py-2 basis-5/12 hidden md:block" placeholder="search" />
        <div className="flex bg-white border-t-2 md:border-none flex-row justify-around  items-center basis-5/12 fixed z-10 bottom-0 h-auto left-0 right-0 md:relative md:flex">
          <div className="md:basis-3/5 p-2 flex flex-col md:flex-row md:border-r-2 border-stone-300">
            <span className="w-[3em] h-[3em] p-2 rounded-full hover:fill-rose-700"><Usericon /></span>
            <span className="text-center">
              <h2 className="text-xl hidden md:block">
                Welcome!
              </h2>
              <p className="font-light hidden text-stone-400 text-md md:block">
                <Link href="/auth/signup">Sign up</Link> Or <a href="/auth/login">Log In</a>
              </p>
              <p className="font-light block text-stone-400 text-md md:hidden">
                User
              </p>
            </span>
          </div>
          <div className="flex flex-col relative md:basis-1/5 px-2 items-center hover:fill-rose-700 ">
            <div className="w-[2em] h-[2em]  rounded-full "><Hearticon /></div>
            <p className="font-light text-stone-400 text-md">Wishlist</p>
          </div>
          <div className="flex flex-col relative md:basis-1/5 px-2 items-center hover:fill-rose-700 ">
            <div className="w-[2em] h-[2em]  rounded-full" onClick={()=>setActiveCart(!activeCart)}><Carticon /></div>
            <p className="font-light text-stone-400 text-md">Cart</p>
            <Dropdown active={activeCart}>
              <div className=""></div>
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
              <div className="flex flex-row w-full gap-4 rounded drop-shadow-md border border-stone-200 py-2 px-4">
                <Image
                  src="https://picsum.photos/300"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="px-2 py-4 relative">
                  <p className="text-ellipsis text-xl md:text-2xl px-2 text-stone-500">Toner Rice</p>
                  <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>34</span>. 44  MAD</p>
                </div>
              </div>
              <Link href="/checkout" className=" w-full px-2 text-center font-sans text-xl font-bold py-2 bg-emerald-600 text-white"> go to checkout</Link>
            </Dropdown>
          </div>

        </div>
        <div className="w-[2em] float-right h-[2em] rounded-full md:hidden"><Barsicon /></div>
      </nav>
      <div className="bg-stone-700 border-t-2 border-white sm:hidden">
        <ul className="w-full bg-black text-white flex flex-row justify-center p8">d</ul>
      </div>
    </header>
  )
}

export default Appbar