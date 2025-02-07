import React from 'react'
import Header from './Header'
import Products from './products'
import Footer from './Footer'


const Home = () => {
  return (
 <div className='bg-[#FDFBF1]  relative'>
    <Header />
    <p className='text-center pt-2 text-1xl capitalize'>trade-assurance
    Alibaba.com protects you from payment to delivery with Trade Assurance.</p>
    <Products />
    <Footer />
 </div>
  )
}

export default Home
