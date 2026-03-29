import React from 'react'

const View = () => {
  return (
    <div className='bg-linear-to-l my-17 py-4 to-[#4F39F6] from-[#9514FA]'>
      <div className=' max-w-[1180px] py-5 flex-wrap flex justify-between mx-auto'>
        <div className='flex-1 text-center border-r-2 border-white'>
            <h2 className='text-[33px] sm:text-[40px] md:text-[50px] font-extrabold text-white'>50K+</h2>
            <p className='text-white sm:text-2xl -mt-2'>Active Users</p>
        </div>
        <div className='flex-1 text-center border-r-2 border-white'>
            <h2 className='text-[33px] sm:text-[40px] md:text-[50px] font-extrabold text-white'>200+</h2>
            <p className='text-white sm:text-2xl -mt-2'>Premium Tools</p>
        </div>
        <div className='flex-1 text-center '>
            <h2 className='text-[33px] sm:text-[40px] md:text-[50px] font-extrabold text-white'>4.9</h2>
            <p className='text-white sm:text-2xl -mt-2'>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default View
