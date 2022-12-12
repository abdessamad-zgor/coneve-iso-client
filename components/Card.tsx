import React from 'react'
import Image from 'next/image'

function Card(props: PropTypes) {
  /**
   * @ A re-useable card component for any element that needs a picture and text
  */
  return (
    <div className="basis-1/5 rounded-lg overflow-hidden border border-rose-100">
      <Image
        src={props.image ? props.image : "https://picsum.photos/300"}
        alt=""
        width={300}
        height={250}
      />


      <div className="px-2 py-4 relative">
        {
          props.title ? <p className="text-ellipsis text-xl md:text-2xl px-2 text-stone-500">{props.title}</p> : ""
        }
        {
          props.price ? <p className='font-light'><span className='text-2xl font-bold md:text-3xl'>{props.price.toFixed(2).split(".")[0]}</span>. {props.price.toFixed(2).split(".")[1]}  MAD</p> : ""
        }

      </div>
    </div>
  )
}

type PropTypes = {
  title?: string,
  image?: string,
  price?: number
}

export default Card