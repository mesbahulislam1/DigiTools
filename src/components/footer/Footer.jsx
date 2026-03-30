import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#101727]'>
        <div className='max-w-[1180px] mx-auto px-5'>
            <div className='grid grid-cols-5 gap-5'>
                <div>
                    <h2 className='text-white text-4xl font-bold'>DigiTools</h2>
                    <p className='text-[#A1A1AA]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='text-white text-[20px]'>Product</h2>
                    <ul className='text-[#A1A1AA] w-fit flex flex-col gap-2'>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">Templates</a>
                        <a href="">Integrations</a>
                    </ul>
                </div>

                <div>
                    <h2 className='text-white text-[20px]'>Company</h2>
                    <ul className='text-[#A1A1AA] w-fit flex flex-col gap-2'>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Press</a>
                    </ul>
                </div>

                <div>
                    <h2 className='text-white text-[20px]'>Resources</h2>
                    <ul className='text-[#A1A1AA] w-fit flex flex-col gap-2'>
                        <a href="">Documentation</a>
                        <a href="">Help Center</a>
                        <a href="">Community</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[20px]'>Social Links</h2>
                    <div>
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer