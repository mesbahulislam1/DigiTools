import React, {useEffect, useState } from 'react'
import Cart from '../../assets/products/shopping-cart.png'
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";




const Navbar = ({card}) => {

  const [showMenu, setShowMenu]=useState(false)

   const dataLoad=()=>{
    const section = document.getElementById("cart-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
     
   }

  useEffect(() => {
    const resizeHandel=()=>{
      if (window.innerWidth >= 600) {
        setShowMenu(false)
        
      }
    }

    window.addEventListener("resize", resizeHandel)
    return () => {
      window.removeEventListener("resize", resizeHandel)
    };
  }, [])

    const NavLink = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']
  return (
    <div className=' border-b fixed top-0  w-full z-100 bg-white border-black/18 py-5'>
        <div className='flex px-5 justify-between items-center max-w-[1180px] mx-auto'>
      <div className='flex items-center gap-3'>
        {
          showMenu ? <IoCloseSharp onClick={()=> setShowMenu(false)} className='text-2xl cursor-pointer  h-[30px] w-[30px] md:hidden'/>:<RiMenu2Line onClick={()=> setShowMenu(true)} className='text-2xl cursor-pointer  h-[30px] w-[30px] md:hidden'/>
        }
        
        <h2 className='text-3xl font-black bg-linear-to-l to-[#4F39F6] from-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
      </div>
      <div className='md:flex gap-[28px] hidden'>
        {
            NavLink.map((list,index)=>{
               return <a key={index} href="#" className='text-[#101727] font-semibold'>{list}</a>
            })
        }
      </div>
      <div className={` fixed bg-white ${showMenu? 'left-0':'-left-1500'} transition-all duration-500 space-y-4 px-8 py-8 w-[250px] h-full top-21 z-70`}>
        {
          NavLink.map((list)=>{
            return <ul>
              <a href="">{list}</a>
            </ul>
          })
        }
      </div>
      <div onClick={()=> setShowMenu(false)} className={` fixed top-0 bg-black/40 ${showMenu? 'left-0':'-left-1500'} w-full transition-all duration-100  h-full top-21 z-60`}>

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
