import React from 'react'
import ProductCard from './ProductCard'

const Product = ({cardData, setCard,card}) => {
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {
            cardData.map((list, index)=>{
                return <ProductCard key={index} list={list} card={card} setCard={setCard}></ProductCard>
            })
        }
    </div>
  )
}

export default Product