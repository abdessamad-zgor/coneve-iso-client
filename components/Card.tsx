import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card(props: PropTypes) {
  /**
   * @ A re-useable card component for any element that needs a picture and text
  */
  return (
    <Link className="basis-4/12 sm:basis-3/12 md:basis-1/5 bg-white shadow-lg rounded-lg overflow-hidden border border-rose-100" href={`/${props.type}/${props.slug}`}>
    <div >
      <Image
        src={props.image ? props.image : "https://picsum.photos/300"}
        alt=""
        width={300}
        height={250}
      />


      <div className="px-2 py-4 relative">
        {
          props.title ? <p className="text-ellipsis text-md md:text-2xl px-2 text-stone-500">{props.title}</p> : ""
        }
        {
          props.price ? <p className='font-light'><span className='text-md text-emerald-700 font-bold md:text-3xl'>{props.price.toFixed(2).split(".")[0]}</span>. {props.price.toFixed(2).split(".")[1]}  MAD</p> : ""
        }

      </div>
    </div>
    </Link>
    
  )
}

type PropTypes = {
  title?: string,
  image?: string,
  price?: number,
  slug?:string,
  type?:string
}

export default Card