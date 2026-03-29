import React from 'react'
import TikImg from '../../../assets/tik.png'
const ProductCard = ({list}) => {
    console.log(list)
  return (
    <div className='border relative flex space-y-3 flex-col border-black/10 p-7'>
        <h2 className=' absolute'>New</h2>
        <h2>{list.icon}</h2>
        <h1 className='text-2xl font-bold'>AI Writing Pro</h1>
        <p className='text-[#627382] '>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
        <h3><span className='text-2xl font-bold'>$29</span>/mo</h3>

        <div className='flex-1' >
            {
                list.features.map((list)=>{
                    return <h2 className='flex items-center text-[#627382] gap-2
                    '><img src={TikImg} alt="" />{list}sd</h2>
                })
            }
        </div>
        <button className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] cursor-pointer px-4.5 py-3 rounded-full text-white font-medium w-full'>Buy Now</button>
    </div>
  )
}

export default ProductCard