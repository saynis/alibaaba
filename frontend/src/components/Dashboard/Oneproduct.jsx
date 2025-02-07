import React from 'react'
import { Link } from 'react-router-dom'

const OneProduct = ({products}) => {
  
  return (
    
       products && products.map((product)=>(
        
      
        <Link to={`/product-details/${product.id}`} 
        className=' '>
    
        <div className='bg-white shadow-md rounded-md p-4'>
       <img
       className='w-full h-48 '
        src={product.image} alt="" />
        <h1 className='text-1xl font-bold mt-4 line-clamp-1 '>{product.title}</h1>
        <p className='mt-4 line-clamp-2'>{product.description}</p>
        <h1 className='mt-4 font-bold text-1xl'>${product.price}</h1>
        <button
        className='w-full text-1xl font-bold rounded-full border py-2 mt-2 
         hover:bg-[#ff6600e2] hover:text-white hover:border-none border-gray-400'
        >Contact supplier</button>
        </div>
   
   </Link>
       ))
       
  )
}

export default OneProduct
