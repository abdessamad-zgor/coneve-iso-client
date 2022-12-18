import Image from "next/image"
import { useState } from "react"
import logo from "../public/asoul_logo.png"
import { Carticon, Usericon, Hearticon, Barsicon } from "../icons"
import Dropdown from "./Dropdown"
import Link from "next/link"
import { useUser } from "@supabase/auth-helpers-react"
import { useCart } from "../context/cart"
import { getPrice, Product } from "../db"

const Appbar = () => {
  let user = useUser()
  let {state} = useCart()
  let [activeCart, setActiveCart] = useState(false);
  let [activeUser, setActiveUser] = useState(false);
  let [activeWishlist, setActiveWishlist] = useState(false);
  let [activeCategories, setActiveCategories] = useState(false)
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
              <h2 className="text-md hidden md:block">
                Welcome! 
              </h2>
              {
                !user ? <p className="font-light hidden text-stone-400 text-md md:block">
                  <Link href="/auth/signup">Sign up</Link> Or <a href="/auth/login">Log In</a>
                </p> : <p className="font-light hidden text-stone-400 text-md md:block">
                  {user?.email}<br/>
                  Signout
                </p> 
              }

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
            <div className="w-[2em] h-[2em]  rounded-full" onClick={() => setActiveCart(!activeCart)}><Carticon /></div>
            <p className="font-light text-stone-400 text-md">Cart</p>
            <Dropdown active={activeCart}>
              <div className=""></div>
              {
                state?.products?.length>0?state.products.map((v :Product )=><div className="flex flex-row w-full gap-4 drop-shadow-md border border-stone-200 rounded py-2 px-4">
                <Image
                  src={v.images.main}
                  alt=""
                  className="rounded "
                  width={100}
                  height={100}
                />
                <div className="px-2 py-4 relative">
                  <p className="text-ellipsis text-xl md:text-2xl px-2  text-stone-500">{v.title}</p>
                  <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>{getPrice(v.price, 1).toPrecision(2).split(".")[0]}</span>. {getPrice(v.price, 1).toPrecision(2).split(".")[1]}  MAD</p>
                </div>
              </div>): <div className="w-full text-center py-4 text-xl font-light bg-white">
                No products here.
              </div>
              }
              
              {state?.products?.length>0?<Link href="/checkout" className=" w-full px-2 text-center font-sans text-xl font-bold py-2 bg-emerald-600 text-white"> go to checkout</Link>: ""}
            </Dropdown>
          </div>

        </div>
        <div className="relative md:hidden">
        <div className="w-[2em] float-right h-[2em] rounded-full md:hidden" onClick={()=>setActiveCategories(!activeCategories)}><Barsicon /></div>
        <Dropdown  active={activeCategories}>
          <ul className="w-full h-[100%] bg-zinc-700 text-white ">
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Toners</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Crémes</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Sérums</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Parfumes</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Savons</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Poudres</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Scrubs</li>

          </ul>
        </Dropdown>
        </div>
        
      </nav>
      <div className="bg-stone-700 border-t-2 border-white hidden md:block">
        <ul className="w-full bg-zinc text-white flex flex-row justify-center p8">

            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Toners</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Crémes</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Sérums</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Parfumes</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Savons</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Poudres</li>
            <li className="text-center w-full p-2 font-light transition-all hover:text-rose-200">Scrubs</li>
        </ul>
      </div>
    </header>
  )
}

export default Appbar