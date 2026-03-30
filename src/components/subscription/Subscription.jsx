import React from 'react'
import tik from '../../assets/tik.png'

const Subscription = () => {
  return (
    <div className='max-w-[1180px] px-5 mx-auto mt-15 mb-[120px]'>
        <h2 className='text-[48px] font-bold text-center'>Simple, Transparent Pricing</h2>
        <p className='text-[#627382] text-center mb-8'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className='flex justify-between flex-col md:flex-row h-full  gap-5'>
            <div className='bg-[#F2F2F2] flex flex-col border border-black/10 rounded-2xl flex-1 p-5 '>
                <h2 className='text-2xl font-bold '>Starter</h2>
                <p>Perfect for getting started</p>
                <h3 className='text-[20px]'><span className='text-[40px] font-bold '>$0</span>/month</h3>
                <div className='space-y-1.5 flex-1'>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Access to 10 free tools</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Basic templates</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Community support</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />1 project per month</h3>

                </div>

                <button className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] px-5 py-2.5 text-white cursor-pointer w-full rounded-full'>Get Started Free</button>
            </div>
            <div className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] flex flex-col border relative border-black/10 rounded-2xl space-y-2 flex-1 p-5 '>
                <h3 className='text-[#BB4D00] bg-[#FEF3C6] px-5 py-1 rounded-full w-fit absolute -top-3 left-[33%]'>Most Popular</h3>
                <h2 className='text-2xl font-bold text-white'>Enterprise</h2>
                <p className='text-white'>For teams and businesses</p>
                <h3 className='text-[20px] text-white'><span className='text-[40px] font-bold '>$29</span>/month</h3>
                <div className='space-y-1.5 flex-1 text-white'>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Access to all premium tools</h3>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Unlimited templates</h3>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Priority support</h3>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Unlimited projects</h3>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Cloud sync</h3>
                    <h3 className='flex items-center gap-2 '><img src={tik} alt="" />Advanced analytics</h3>

                </div>

                <button className='text-[#9514FA] px-5 py-2.5 bg-white cursor-pointer w-full rounded-full font-bold'>Start Pro Trial</button>
            </div>

            <div className='bg-[#F2F2F2] flex flex-col border border-black/10 rounded-2xl space-y-2 flex-1 p-5 '>
                <h2 className='text-2xl font-bold '>Enterprise</h2>
                <p>For teams and businesses</p>
                <h3 className='text-[20px]'><span className='text-[40px] font-bold '>$99</span>/month</h3>
                <div className='space-y-1.5 flex-1'>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Everything in Pro</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Team collaboration</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Custom integrations</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Dedicated support</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />SLA guarantee</h3>
                    <h3 className='flex items-center gap-2 text-[#627382]'><img src={tik} alt="" />Custom branding</h3>

                </div>

                <button className='bg-linear-to-l to-[#4F39F6] from-[#9514FA] px-5 py-2.5 text-white cursor-pointer w-full rounded-full'>Contact Sales</button>
            </div>
        </div>
    </div>
  )
}

export default Subscription