import Image from "next/image"
import logo from "../public/asoul_logo.png"
import {Carticon, Usericon, Hearticon} from "../icons"

const Appbar = () => {
  return (
    <header className=''>
        <nav className="py-2 px-8 flex flex-row items-center border-b-2 border-stone-700">
          <div className="basis-2/12 flex ">
            <Image
              src={logo}
              alt="logo"
              width={80}
            /> 
          </div>
          <input type="text" className="bg-stone-100 px-4 py-px basis-5/12" placeholder="search" />
          <div className="flex flex-row items-center basis-5/12">
            <div className="basis-3/5 p-2 flex border-r-2 border-stone-300">
              <span className="w-[3em] h-[3em] p-2 rounded-full"><Usericon/></span>
              <span >
                <h2 className="text-xl">
                  Welcome!
                </h2>
                <p className="font-light">
                  <a href="">Sign up</a> Or <a href="">Log In</a>
                </p>
              </span>
            </div>
            <div className="flex flex-col basis-1/5 px-2 items-center">
            <div className="w-[2em] h-[2em]  rounded-full"><Hearticon/></div>
            <p className="font-light">Wishlist</p>
            </div>
            <div className="flex flex-col basis-1/5 px-2 items-center">
            <div className="w-[2em] h-[2em]  rounded-full"><Carticon/></div>
            <p className="font-light">Cart</p>
            </div>
          </div>
        </nav>
        <div className="bg-stone-700 border-t-2 border-white">
          <ul className="w-full bg-black text-white flex flex-row justify-center p8">d</ul>
        </div>
    </header>
  )
}

export default Appbar