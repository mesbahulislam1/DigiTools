import React from 'react'

const ExploreSection = () => {
  return (
    <div className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] py-20'>
        <div className='max-w-[1180px] mx-auto px-5 text-center space-y-3'>
            <h1 className='text-[40px] font-bold text-white'>Ready to Transform Your Workflow?</h1>
            <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

            <div className='flex gap-3 justify-center'>
                <button className='bg-white px-5 py-3 rounded-full font-medium text-[#9514FA]'>Explore Products</button>
                <button className='text-white border px-5 py-3 rounded-full font-medium '>View Pricing</button>
            </div>
            <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    </div>
  )
}

export default ExploreSection