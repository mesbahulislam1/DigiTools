import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='bg-[#101727] pt-[100px]'>
        <div className='max-w-[1180px] mx-auto px-5'>
            <div className='grid grid-cols-1 mb-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                <div  className='lg:col-span-2'>
                    <h2 className='text-white text-4xl font-bold'>DigiTools</h2>
                    <p className='text-[#A1A1AA] mt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='text-white text-[20px]'>Product</h2>
                    <ul className='text-[#A1A1AA] mt-3 w-fit flex flex-col gap-2'>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">Templates</a>
                        <a href="">Integrations</a>
                    </ul>
                </div>

                <div>
                    <h2 className='text-white text-[20px]'>Company</h2>
                    <ul className='text-[#A1A1AA] mt-3 w-fit flex flex-col gap-2'>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Press</a>
                    </ul>
                </div>

                <div>
                    <h2 className='text-white text-[20px]'>Resources</h2>
                    <ul className='text-[#A1A1AA] w-fit mt-3 flex flex-col gap-2'>
                        <a href="">Documentation</a>
                        <a href="">Help Center</a>
                        <a href="">Community</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[20px]'>Social Links</h2>
                    <div className='flex gap-2 mt-3'>
                        <a href=""><RiInstagramFill className='bg-white h-[40px] p-2 rounded-full w-[40px] text-black'/></a>
                        <a href=""><FaFacebookSquare className='bg-white h-[40px] p-2 rounded-full w-[40px] text-black'/></a>
                        <a href=""><FaXTwitter className='bg-white h-[40px] p-2 rounded-full w-[40px] text-black'/></a>
                    </div>
                </div>
            </div>

            <div className='border-t border-[#c9c9c9] flex py-[20px]  justify-between flex-col md:flex-row'>
                <p className='text-white text-center'>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-5 mt-3 justify-center  text-white'>
                    <h2>Privacy Policy </h2>
                    <h2>Terms of Service </h2>
                    <h2>Cookies</h2>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer