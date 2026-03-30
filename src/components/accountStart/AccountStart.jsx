import React from 'react'
import Img1 from '../../assets/user.png'
import Img2 from '../../assets/package.png'
import Img3 from '../../assets/rocket.png'

const AccountStart = () => {
  return (
    <div className='bg-[#F9FAFC] mt-17 pt-6 pb-18'>
        <div className='items-center px-5 max-w-[1180px] mx-auto'>
        <h1 className='text-[48px] font-bold text-center'>Get Started in 3 Steps</h1>
        <p className='text-[#627382] text-center mb-8'>Start using premium digital tools in minutes, not hours.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            <div className='border space-y-3 px-7 py-15 relative text-center border-black/20 rounded-2xl shadow'>
                <h2 className='bg-linear-to-l absolute right-4 top-4 to-[#4F39F6] from-[#9514FA] w-fit px-4 py-2.5 font-bold text-white rounded-full'>01</h2>
                <div className='bg-[#F2E9FE] mx-auto w-fit p-5 rounded-full'>
                    <img src={Img1} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>Create Account</h2>
                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border space-y-3 px-7 py-15 relative text-center border-black/20 rounded-2xl shadow'>
                <h2 className='bg-linear-to-l absolute right-4 top-4 to-[#4F39F6] from-[#9514FA] w-fit px-4 py-2.5 font-bold text-white rounded-full'>02</h2>
                <div className='bg-[#F2E9FE] mx-auto w-fit p-5 rounded-full'>
                    <img src={Img2} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>Choose Products</h2>
                <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='border space-y-3 px-7 py-15 relative text-center border-black/20 rounded-2xl shadow'>
                <h2 className='bg-linear-to-l absolute right-4 top-4 to-[#4F39F6] from-[#9514FA] w-fit px-4 py-2.5 font-bold text-white rounded-full'>03</h2>
                <div className='bg-[#F2E9FE] mx-auto w-fit p-5 rounded-full'>
                    <img src={Img1} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>Start Creating</h2>
                <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AccountStart