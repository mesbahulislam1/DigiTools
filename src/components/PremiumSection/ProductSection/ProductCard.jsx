import React from 'react'
import TikImg from '../../../assets/tik.png'
import { toast } from 'react-toastify'
const ProductCard = ({list, setCard, card}) => {
    
    const dataHandeling =(event)=>{

        const exits = card.find(item=> item.id === event.id);
        if (!exits) {
            setCard([...card, event])
        toast.success('Add to Cart')
        }else{
            toast.error('Already added');
        }
        
    }

  return (
    <div className='border items-start rounded-2xl relative flex space-y-3 flex-col border-black/10 p-7'>
        <h2 className={` absolute right-5 top-3 ${list.tag === 'new' && 'bg-[#DBFCE7] text-[#0A883E]'} ${list.tag === 'popular' && 'bg-[#E1E7FF] text-[#9514FA]'} ${list.tag === 'best seller' && 'text-[#BB4D00] bg-[#FEF3C6]'} capitalize font-medium px-5 py-1 rounded-full`}>{list.tag}</h2>
        <div className='p-3 border border-black/15 rounded-full'>
            <img src={list.icon} alt="" />
        </div>
        <h1 className='text-2xl font-bold'>{list.name}</h1>
        <p className='text-[#627382] '>{list.description}</p>
        <h3><span className='text-2xl font-bold'>${list.price}</span>/{list.period}</h3>

        <div className='flex-1' >
            {
                list.features.map((list, index)=>{
                    return <h2 key={index} className='flex items-center text-[#627382] gap-2
                    '><img src={TikImg} alt="" />{list}</h2>
                })
            }
        </div>
        <button type='button' onClick={()=> dataHandeling(list)} className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] cursor-pointer px-4.5 py-3 rounded-full text-white font-medium w-full'>Buy Now</button>
    </div>
  )
}

export default ProductCard