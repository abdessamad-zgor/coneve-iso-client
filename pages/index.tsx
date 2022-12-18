import Head from 'next/head'

import Slider from "react-slick"
import { productsApi } from '../db'
import Image from "next/image"
import Card from "../components/Card"

export default function Home() {

  return (
    <>
      <div>
        <Slider>
          <div className="w-full h-[50vh] relative ">
            <div className="absolute inset-0 ">
              <Image
                src="https://picsum.photos/1000/500"
                alt=""
                fill={true}

              />

            </div>

            <div className="backdrop-blur-sm  w-full h-[100%] z-10 relative">
              <h1 className="text-7xl text-white font-bold drop-shadow absolute top-[1em] left-[1em]">Find out out new summer collection</h1>
              <button className='py-4 px-8 text-white text-2xl absolute right-[3em] bottom-[3em] bg-rose-700 border-2 rounded-lg border-transparent focus:animate:bounce hover:border-rose-400'>Buy now</button>
            </div>
          </div>
        </Slider>
      </div>
      <section className="bg-gradient-to-r via-slate-100 from-emerald-100 to-rose-100">
        <h1 className="text-5xl pl-8 py-4 underline decoration-4 font-bold text-rose-700">Featured</h1>
        <div className="flex flex-row wrap w-full justify-center gap-2 px-4 py-8">
          {
            (productsApi.getIndex().data as Array<{
              title: string;
              image: string;
              price: number;
              slug: string;
            }>).map((v, i) => <Card type="products" key={i} {...v} />)
          }
        </div>
      </section>
      <section className="banner">
        {/* Ads banner */}
      </section>
      <section className="Sign - up">
        {/* Incentive (reduction: to sign up) */}
      </section>
      <section className='Learn more section'>
        {/* Educational content that needs signup */}
      </section>
      <section className="Collections">
        {/* An index of available products */}
      </section>
    </>
  )
}
