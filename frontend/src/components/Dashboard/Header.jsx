import React, { useState } from 'react'
import logo from '../Dashboard/logoFolder/headerLogo.png'
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [isTouched, setIsTeched] = useState(false)
  const [menuClick, setMenuClik ] = useState(true)
  const [index , setIndex] = useState(true)

  const handleClick = ()=>{
  setIsTeched(true)
  setMenuClik(false)
  }

  const handleChange = ()=>{
    setIsTeched(false)
    setIndex(false)
    setMenuClik(true)
   
  }

  const navigate = useNavigate()
  
  return (
    <div className='shadow-md bg-white pb-4 relative  '>

    <div className='flex justify-between gap-4 md:px-6 items-center md:p-6 '>
       
        {/* <img className='w-36 ' src={logo} alt="" /> */}
        <h1 className='text-4xl text-[#ff6600e2] font-bold'>Alibaaba.com</h1>
      
       {/* search */}
      <div className='border  border-gray-500 rounded-full md:w-1/2 items-center md:flex hidden   justify-between pl-4 pr-2 gap-2  '>
        <select className='focus:outline-none text-lg'>
            <option>product</option>
            <option>monofuctres</option>
            <option>suppliers</option>
            <option>Regional suplayers</option>
        </select>

        <input 
        className='w-full   py-2 pt-2 focus:outline-none text-2xl border-l pl-4 border-gray-600 '
        type="search"
        placeholder='what are you lookin for ?' />
        <button className='px-8 py-2 rounded-full text-white flex items-center
         bg-[#ff6600e2]  text-lg'> <IoSearchOutline className='text-2xl ' /> serach</button>
      </div>

      {/* singin and singup */}


    <div className={`absolute md:static bg-[#F4F4F4] bg-opacity-80 md:bg-white
     w-full md:w-auto ${isTouched ? "top-0" : "top-[-500px]"  }   `}> 


      <div className='md:flex  justify-between  items-center gap-4 p-8 md:p-0 '>
        <ul className='flex gap-4'>
          <li>Delivery to USA</li>
          <li>English USD</li>
          
        </ul>
        <CiShoppingCart className='text-2xl font-bold md:flex hidden' />
        <button onClick={()=> navigate("/login")}
        className='flex gap-2 items-center px-8 py-2 mt-4 md:mt-0 bg-[#ff6600e2]  text-black font-semibold border-none rounded-lg'>
           <CgProfile className='text-2xl' /> <span>LogOut</span></button>

      </div>

      </div>
  
      {menuClick && <button onClick={handleClick} className='md:hidden text-4xl'><IoMenu /></button>}

      {isTouched &&<button onClick={handleChange} className={`md:hidden text-4xl ${index ? "z-10" : "z-0"}`}><IoCloseSharp /></button>}
    </div>


      <div className='md:flex justify-between  hidden px-8'>

     <div className='flex gap-4 text-1xl items-center'>
       <span className='flex items-start gap-4'> <IoMenuSharp /> All categories</span>
       <span>Featured selections</span>
       <span>Trade Assurance</span>
     </div>

     <div className='flex gap-4 text-1xl items-center'>
       <span>  Buyer Central</span>
       <span>Help Center</span>
       <span>Get the app</span>
       <span>Became supplier</span>
     </div>
     
     </div>


    </div>
  )
}

export default Header
