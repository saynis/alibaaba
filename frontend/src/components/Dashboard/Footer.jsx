import React from 'react'
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (

  <div> 

  <div className='bg-white px-16 p-16 '> 
    
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>

      {/* divka 1aad */}
        <div>
          <h1 className='font-bold text-[18px]'>Get support</h1>
       <ul className='space-y-4 mt-2'>
        <li>Help Center</li>
        <li>Live chat</li>
        <li>Check order status</li>
        <li>Refunds</li>
        <li>Report abuse</li>
       </ul>
        </div>

        {/* divka labaad */}
        <div>
          <h1 className='font-bold text-[18px]'>Trade Assurance</h1>
       <ul className='space-y-4 mt-2'>
        <li>Help Center</li>
        <li>Live chat</li>
        <li>Check order status</li>
        <li>Refunds</li>
        <li>Report abuse</li>
       </ul>
        </div>

        {/* divka sedexaad */}
        <div>
          <h1 className='font-bold text-[18px]'>Source on Alibaba.com</h1>
       <ul className='space-y-4 mt-2'>
        <li>Help Center</li>
        <li>Live chat</li>
        <li>Check order status</li>
        <li>Refunds</li>
        <li>Report abuse</li>
       </ul>
        </div>
        {/* divka afraad */}
        <div>
          <h1 className='font-bold text-[18px]'>Sell on Alibaba.com</h1>
       <ul className='space-y-4 mt-2'>
        <li>Help Center</li>
        <li>Live chat</li>
        <li>Check order status</li>
        <li>Refunds</li>
        <li>Report abuse</li>
       </ul>
        </div>

        {/* divka 5aad */}
        <div>
          <h1 className='font-bold text-[18px]'>Get to know us</h1>
       <ul className='space-y-4 mt-2'>
        <li>Help Center</li>
        <li>Live chat</li>
        <li>Check order status</li>
        <li>Refunds</li>
        <li>Report abuse</li>
       </ul>
        </div>

    </div>
     
     <div className='md:flex justify-between mt-16'>
      {/* divka logo da */}
      <div className='flex gap-4 text-2xl text-gray-500'>
        <span><ImFacebook2 /></span>
        <span><ImLinkedin2 /></span>
        <span><IoLogoTwitter /></span>
        <span><IoLogoInstagram /></span>
        <span><IoLogoYoutube /></span>
        <span><FaTiktok /></span>
      </div>

      {/* divka labaad */}
      <div className='md:flex gap-4 items-center mt-4 '>
        <p className='mb-4'>Trade on the go with the Alibaba.com app</p>
        <div className='flex gap-4'> 
        <button className='py-2 px-5 bg-black text-white rounded-lg'>App store</button>
        <button className='py-2 px-5 bg-black text-white rounded-lg'>Play store</button>
        </div>
       
      </div>

     </div>

    </div>

     {/* the real footer */}
    <div className='flex flex-col text-center bg-[#F4F4F4] pt-6 pb-2 px-4'>
      
    <p>  AliExpress
1688.com
Tmall Taobao World
Alipay
Lazada
Taobao Global </p>

<p> Policies and rules
Legal Notice
Product Listing Policy
Intellectual Property Protection
Privacy Policy
Terms of Use
Integrity Compliance</p>

<p> © 1999-2025 Alibaba.com. All rights reserved.
浙公网安备 33010002000092号
浙B2-20120091-4</p>

    </div>

    </div>
    
  )
}

export default Footer
