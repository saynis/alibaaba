import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneProduct from './Oneproduct'




const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/all`)
      setProducts(data.products)

    }

    fetchData();
  },[])

  return (
    <div className='md:px-36 px-4'>
    <div className='max-w-[1440px] mx-auto bg-[#F4F4F4] mt-4 
    grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4'>
           
          <OneProduct products={products} />
       </div>

       </div>
   
  )
}

export default Products
