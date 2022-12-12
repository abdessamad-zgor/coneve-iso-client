import Head from 'next/head'
// import testBg from "../public/bg-bg.jpg"
// import productImage from "../public/product.jpeg"
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

            <div className="backdrop-blur-sm  w-full h-[100%] z-10 text-center">
              <h1>Salling Header</h1>
              <button className='py-2 px-4 bg-rose-700 border-2 border-[rgba(0,0,0,0.0)] hover: border-white'>Buy now</button>
            </div>
          </div>
        </Slider>
      </div>
      <section>
        <h1 className="text-4xl underline decoration-4 font-serif font-bold text-rose-500">Featured</h1>
        <div className="flex flex-row wrap w-full gap-2 px-4 py-8">
          {
            productsApi.getIndex().map(v => <Card type="products" {...v} />)
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
