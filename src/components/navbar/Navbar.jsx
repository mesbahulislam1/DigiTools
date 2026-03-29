import React from 'react'
import Cart from '../../assets/products/shopping-cart.png'
const Navbar = ({card}) => {

    const NavLink = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']
  return (
    <div className=' border-b border-black/18 py-5'>
        <div className='flex px-5 justify-between items-center max-w-[1180px] mx-auto'>
      <h2 className='text-3xl font-black bg-linear-to-l to-[#4F39F6] from-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
      <div className='md:flex gap-[28px] hidden'>
        {
            NavLink.map((list,index)=>{
               return <a key={index} href="#" className='text-[#101727] font-semibold'>{list}</a>
            })
        }
      </div>

      <div className='flex items-center gap-3'>
        <div>
          {
            card.length=== 0 ?<button className=' cursor-pointer'><img src={Cart} alt="" /></button>:
            <div className=' relative'>
              <h2 className='bg-red-600 px-3 py-1 absolute -top-7 rounded-full font-black text-white'>{card.length}</h2>
              <button className=' cursor-pointer'><img src={Cart} alt="" /></button>
            </div>
          }
          
        </div>
        <button className=' cursor-pointer'>Login</button>
        <button className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] px-5 py-2.5 text-white cursor-pointer rounded-full'>Get Started</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
