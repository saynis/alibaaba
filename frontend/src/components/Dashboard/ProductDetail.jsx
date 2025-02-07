import React, { useEffect, useState,} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Header from './Header';
import Footer from './Footer';


const ProductDetail = () => {

  const [product, setProduct] = useState(null)

  const {id} = useParams();
  const navigate = useNavigate();

 

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/find/${id}`)
      setProduct(data.product)
      
    }
    fetchData()
  },[])

  return (
     product &&  <div>
      <Header/>
      <div className='md:flex justify-between gap-4 md:px-24 px-4 p-8'>

        {/* qaybta sawirka */}
      <div className='flex flex-col'>
      <button
      onClick={()=> navigate(-1) }
       className='py-2 md:w-1/4 w-full bg-[#ff6600e2] text-white rounded-full'>Go back</button>
     <h1 className='font-bold text-[18px] text-gray-600 mt-4'>Wholesale price High quality activewear for women manufacturers </h1>
     <p className='mt-4'>No reviews yet#15Most popular in Tension Strapsandyoga Ropes</p>
     <p className='mt-2 bg-[#f8f8f8] p-2'>company-logoBeijing Bid Ace Co., Ltd.20 yrsCN</p>
     <img 
     className='mt-8 md:w-1/2 w-full  object-cover border-x-8 border-[#f8f8f8]  '
     src={product.image} alt="" />
   
      </div>
        
        {/* qaybat price ka */}
        <div className='bg-white shadow-lg p-4 md:w-1/3 w-full'>
        <div className='flex gap-16'>
          <span>500 - 999 pieces</span>
          <span>500 - 999 pieces</span>
        </div>

          <div className='flex gap-16 mt-4'>
          <span className='text-[28px] font-bold'>${product.price}</span>
          <span className='text-[28px] font-bold' >${product.price}</span>
          </div>
          
          <p className='mt-4 mb-4 text-1xl'>= 1000 pieces</p>
          <span className='text-[28px] font-bold'>${product.price}</span>
          
          <div className=' mt-4 border border-gray-300'></div>

          <h1 className='font-bold text-[25px] mt-4'>Variations</h1>
          <div className='flex justify-between mt-4'>
          <p>Total options:7 Color.</p>
          <p className='text-[18px] underline'>Select now</p>

          

          </div>

          <h1 className='mt-2 font-bold text-[24px]'>Colors 7 </h1>
           
          <div className='flex gap-2 mt-4'>
            
            <button className='bg-gray-300 py-1 px-4 rounded'>blue</button>

            <button className='bg-gray-300 py-1 px-4 rounded'>green</button>

            <button className='bg-gray-300 py-1 px-4 rounded'>red</button>

            <button className='bg-gray-300 py-1 px-4 rounded'>black</button>

           

          </div>
          <button className='bg-gray-300 py-1 px-4 rounded mt-2'>orange</button>
         
          <div className=' mt-4 border border-gray-300'></div>

          <h1 className='mt-4 text-[25px] font-bold'>Shipping</h1>

          <p className='mt-4'>{product.description}</p>

      <div className='flex gap-4 mt-4'>
         <button className='py-2 w-1/2 bg-[#ff6600e2] text-white rounded-full'>Send inquiry</button>
         <button className='py-2 w-1/2 rounded-full border border-gray-400'>Chat now</button>
      </div>
          
        </div>

      </div>
    
      <Footer />
    </div>
  )
}

export default ProductDetail
