import React from 'react'
import Dot from '../../assets/dot.png'
import Play from '../../assets/Play.png'
import HeroImage from '../../assets/banner.png'

const Hero = () => {
  return (
    <div className='flex justify-between items-center mt-[60px] gap-5 px-5 flex-col md:flex-row max-w-[1180px]  mx-auto'>
      <div className='flex-1'>
        <h3 className='flex items-center gap-2 bg-[#E1E7FF] px-3 py-1 w-fit rounded-full'><img src={Dot} alt="" />
        <span className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] bg-clip-text text-transparent font-medium'>New: AI-Powered Tools Available</span></h3>
        <h1 className='text-[40px] sm:text-[56px]  text-[#101727] font-extrabold sm:leading-[84px]'>Supercharge Your Digital Workflow</h1>
        <p className='text-[#627382] '>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating aster today. Explore Products </p>

        <div className='flex items-center gap-4 mt-8'>
            <button className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] cursor-pointer px-4.5 py-4 rounded-full text-white font-medium'>Explore Products</button>
            <div className="p-[1px] rounded-full  bg-gradient-to-l from-[#9514FA] to-[#4F39F6] inline-block">
             <button className="px-5 py-4 cursor-pointer rounded-full bg-white flex items-center gap-2">
               <img src={Play} alt="" />
               <span className="bg-gradient-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent            font-bold">
                 Watch Demo
               </span>
             </button>
           </div>
        </div>
      </div>
      
        <div className='flex-1'>
            <img src={HeroImage} alt="" className='w-full'/>
        </div>
      
    </div>
  )
}

export default Hero
