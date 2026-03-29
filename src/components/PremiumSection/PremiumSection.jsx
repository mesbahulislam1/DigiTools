import React, { use, useState } from 'react'
import Product from './ProductSection/Product'
import Cart from './ProductSection/Cart'

const PremiumSection = ({dataCardLoad, setCard,card}) => {
    const cardData = use(dataCardLoad)
    
    const [showCard, setShowCard]=useState('products')

  return (
    <div className='px-5 max-w-[1180px] mx-auto'>
      <div className='max-w-[600px] space-y-3 mx-auto text-center'>
        <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
      <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      <div className='text-center py-7'>
        <button onClick={()=> setShowCard('products')} className={` ${showCard==='products'? 'bg-linear-to-l to-[#4F39F6] from-[#9514FA] text-white':'text-[#25065D]'} px-5 py-2.5 rounded-full font-bold  `}>Products</button>
        <button onClick={()=>setShowCard('cart')} className={` ${showCard==='cart'? 'bg-linear-to-l to-[#4F39F6] from-[#9514FA] text-white':'text-[#25065D]'}  px-5 py-2.5 rounded-full font-bold `}>Cart {card.length!==0 && `(${card.length})`}</button>
      </div>
      {
        showCard === 'products' && <Product cardData={cardData} card={card} setCard={setCard}></Product>
      }
      {
        showCard === 'cart' && <Cart card={card} setCard={setCard}></Cart>
      }
    </div>
  )
}

export default PremiumSection
