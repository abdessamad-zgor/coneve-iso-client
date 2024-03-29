import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Product, Response, productsApi, getPrice } from '../../db'
import Image from 'next/image'
import { useCart } from '../../context/cart'
import { CartAddIcon, Hearticon } from '../../icons'

const ProductDetails = (props:PropTypes) => {
  if(props.product.error){
    return <div>NOT Found</div>
  }
  let router = useRouter()
  let { slug } = router.query
  let {dispatch} = useCart()
  let [quantity, setQuantity] = useState(1)
  let [price, setPrice] = useState(getPrice((props.product.data as Product).price, quantity))

  useEffect(()=>{
    setPrice(getPrice((props.product.data as Product).price, quantity))
  }, [quantity])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="drop-shadow-md m-8 relative bg-white w-10/12 flex-col p-8 flex md:flex-row">
        <div className=" ">
          <Image
            src={(props.product.data as Product).images.main}
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div className="text-center flex flex-col flex-stretch  md:text-left md:pl-8">
          <div className="grow"><h1 className='text-rose-500 text-6xl'>{(props.product.data as Product).title}</h1></div>

          <div className="grow">
            <p className="font-thin text-md">Volume : <span className="font-bold text-xl">{(props.product.data as Product).volume}</span></p>
            <p className="font-thin text-md flex-row items-center flex">Categorie : <span className="font-bold text-xl p-2 flex items-center justify-around border border-stone-100 shadow hover:shadow-emerald-100 flex-row rounded-2xl"><Image alt="" src={(props.product.data as Product).images.main} width={50} height={50} className="rounded-full" />{(props.product.data as Product).categorie}</span></p>
          </div>

          <span className="border w-auto border-stone-100 items-center flex flex-row">
            <button className='rounded-l-lg p-4 bg-rose-600 font-bold text-white text-2xl' onClick={()=>quantity-1==0?(()=>{})():setQuantity(quantity-1)}>-</button>
            <span className='p-4 text-center text-3xl text-bold text-stone-600'>{quantity}</span>
            <button className='rounded-r-lg p-4 bg-emerald-600 font-bold text-white text-2xl' onClick={()=>setQuantity(quantity+1)}>+</button>
            <p className='font-light px-4'><span className='text-2xl text-emerald-700 font-bold md:text-3xl'>{price.toFixed(2).split(".")[0]}</span>. {price.toFixed(2).split(".")[1]}  MAD</p>
          </span>


        </div>
        <span className="absolute w-[30%] items-center p-4 top-0 bottom-0 -right-[10%] flex flex-col gap-2">
          <button onClick={()=>dispatch({type:"ADD_PRODUCT", payload:props.product.data})} className='w-[3em] transition-all hover:w-[100%] h-[3em] hover:flex hover:flex-row hover:items-center hover:justify-center group rounded-full bg-emerald-500 p-2 fill-white shadow-md '>
            <span className="w-[3em] h-[3em] group-hover:p-2 rounded-full "><CartAddIcon /></span>
            
            <p className='hidden group-hover:block text-md font-light text-white font-mono px-2'>Add to Cart</p>
          </button>
          <button className='w-[3em] transition-all  hover:w-[100%] h-[3em] hover:flex hover:flex-row hover:items-center hover:justify-center group rounded-full bg-emerald-500 p-2 fill-white shadow-md '>
            <span className="w-[3em] h-[3em] group-hover:p-2 rounded-full "><Hearticon /></span>
            
            <p className='hidden group-hover:block text-md font-light text-white font-mono px-2'>Add to Whishlist</p>
          </button>
        </span>
      </div>
    </div>
  )
}

export default ProductDetails

export async  function getServerSideProps(context: { params: { slug: string } }){
  let product = productsApi.getbySlug(context.params.slug)
  return {
    props: {
      product
    }
  }
}

type PropTypes = {
  product:Response<Product>
}