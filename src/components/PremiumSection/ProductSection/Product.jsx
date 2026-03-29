import React from 'react'
import ProductCard from './ProductCard'

const Product = ({cardData}) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            cardData.map((list)=>{
                return <ProductCard list={list}></ProductCard>
            })
        }
    </div>
  )
}

export default Product