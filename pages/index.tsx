import Head from 'next/head'
import Slider from "react-slick"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      
      <div>
        <Slider>
          
            <div className="backdrop-blur-sm  absolute inset-0 text-center"><h1>Salling Header</h1>
            <button className='py-2 px-4 bg-rose-700 border-2 border-[rgba(0,0,0,0.0)] hover: border-white'>Buy now</button></div>
            
          
        </Slider>
      </div>
      <section>
        <h1>Featured</h1>
        <div className="flex flex-row">

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
