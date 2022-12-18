import React from 'react'
import { productsApi } from '../../db'
import Card from '../../components/Card'
import { Filtericon } from '../../icons'

const Products = () => {
  return (
    <div className='w-full'>

      <div className=" flex flex-col md:flex-row">
        <aside className=' basis-3/12'>

        </aside>
        <div className="flex flex-col md:flex-row gap-2 wrap">
          {
            (productsApi.getIndex().data as Array<{
              title: string;
              image: string;
              price: number;
              slug: string;
            }>).map((v, i) => <Card type="products" key={i} {...v} />)
          }
        </div>

      </div></div>

  )
}

export default Products