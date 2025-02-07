import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const [formData, setFormData] = useState({
     email: "",
     password: ""
    })

    const navigate = useNavigate()

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    

    const handleSubmit = async(event)=>{
     event.preventDefault();

     try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, formData)
        const token = response.data.token
        if(formData.email || formData.password){
           if(token){
               navigate("/login")
           }else{
             toast.error("email all ready exists")
           }
        }else{
           toast.error("canot be empty")
        }
     } catch (error) {
        toast.error("server is not running")
     }
     
    
    }

  return (
    <div className=''>
        {/* alibaaba log */}
      <div className='p-8 md:px-12 flex gap-4'>
           <h1 className='text-3xl text-[#ff6600e2] font-bold'>Alibaaba.com</h1>
           <select className='w-48 border border-gray-300 focus:border-2 focus:border-blue-800'>
            <option >English</option>
            <option >somali</option>
           </select>
      </div>
    
    {/* main section */}

    <div className='flex md:justify-center overflow-hidden'>

        <div className='md:flex flex-col'>

        {/* gift div */}
       <div className='bg-[#FFE9E0] h-12 flex gap-2 items-center p-8 md:pr-48 rounded-lg '>
       <span>🎂  Get up to</span>
       <h2 className='font-bold '>US$20 welcome perks! </h2>
       </div>
     
     {/* inputs div */}
      
      <form onSubmit={handleSubmit} className='mt-8 '>

      <label className='flex gap-2 items-center mb-4'>
      *Country / Region:
     <select className='w-96 py-2 border border-gray-400 px-2'>
        <option>Ethiopia</option>
        <option>somalia</option>
        <option>kenya</option>
        <option>somaliland</option>
        <option>jabuuti</option>
     </select>
     </label>
       
       {/* email iyo passord */}
       <label className='flex px-[79px] gap-4 mb-4 items-center '>
        email: 
        <input type="text"
         placeholder='enter your email'
         className='w-96 py-2 border border-gray-400 px-2 text-lg'
         name='email'
         onChange={handleChange}
         />
       </label>


       <label className='flex px-[55px] gap-4 mb-4 items-center '>
        password: 
        <input type="password"
         placeholder='enter your Password'
         className='w-96 py-2 border border-gray-400 px-2 text-lg'
         name='password'
         onChange={handleChange}
         />
       </label>


       {/* phone */}
       <label className='flex px-[55px] gap-4 mb-4 items-center '>

        <div className='flex px-[60px] space-x-6'>
         
          <div className='text-1xl flex gap-4 items-center'>
          Tel: 
        <input type="text"
         placeholder='+2519'
         className='w-24 py-2 border border-gray-400 px-2 text-lg'
         />
          </div>
         
          <div>
      
        <input type="text"
         placeholder='enter your Phone number'
         className='w-[250px] py-2 border border-gray-400 px-2 text-lg'
         />
          </div>
        </div>
       </label>
           
           {/* button */}
           <div className='mt-8 ml-36'>
          <button
          className='px-5 py-2 bg-[#ff6600e2] text-white font-bold text-lg rounded-lg border-none' 
          type="submit">Create account</button>
          </div>
       </form>
       
    </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default SignUp
