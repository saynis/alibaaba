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
     
     // Validate email and password
     if(!formData.email || !formData.password){
         toast.error("Fadlan buuxi dhammaan meelaha looga baahan yahay");
         return;
     }

     // Basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(formData.email)) {
         toast.error("Fadlan geli email sax ah");
         return;
     }

     // Password length validation
     if (formData.password.length < 6) {
         toast.error("Password-ku waa inuu ahaadaa ugu yaraan 6 xaraf");
         return;
     }

     try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, formData)
        const token = response.data.token
        if(token){
            toast.success("Si guul leh ayaad isugu diiwaangelisay");
            navigate("/login")
        }
     } catch (error) {
        if(error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Cilad ayaa dhacday, fadlan mar kale isku day");
        }
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

    <div className='flex justify-center '>

        <div className='md:flex flex-col px-8 md:px-0'>

        {/* gift div */}
       <div className='bg-[#FFE9E0] h-12 flex gap-2 items-center 
       p-8 md:pr-48 
       rounded-lg '>
       <span>🎂  Get up to</span>
       <h2 className='font-bold '>US$20 welcome perks! </h2>
       </div>
     
     {/* inputs div */}
      
      <form onSubmit={handleSubmit} className='mt-8  '>

      <label className='md:flex  gap-2 items-center mb-4 px-4 md:px-0'>
      <p className='mb-4 md:mb-0'>  *Country / Region:</p>
     <select className='md:w-96 w-full py-2 border rounded-md border-gray-400 px-2'>
        <option>Ethiopia</option>
        <option>somalia</option>
        <option>kenya</option>
        <option>somaliland</option>
        <option>jabuuti</option>
     </select>
     </label>
       
       {/* email iyo passord */}
       <label className='md:flex md:px-[79px] gap-4  mb-4  items-center '>
       <p  className='mt-2 md:mt-0'> email:</p>  
        <input type="text"
         placeholder='enter your email'
         className='md:w-96 w-full py-2 border mt-2 md:mt-auto rounded-md border-gray-400 px-2 text-lg'
         name='email'
         onChange={handleChange}
         />
       </label>


       <label className='md:flex md:px-[55px] gap-4 mb-4 items-center '>
       <p  className='mt-2 md:mt-0'> password:</p>  
        <input type="password"
         placeholder='enter your Password'
         className='md:w-96 w-full py-2 mt-2 border rounded-md border-gray-400 px-2 text-lg'
         name='password'
         onChange={handleChange}
         />
       </label>


       {/* phone */}
       <label className='md:flex md:px-[55px] gap-4 mb-4 items-center '>

        <div className='flex md:px-[60px] space-x-6 mt-6 md:mt-auto'>
         
          <div className='text-1xl flex gap-4 items-center'>
          Tel: 
        <input type="text"
         placeholder='+2519'
         className='md:w-24 w-12 py-2 border rounded-md border-gray-400 px-2 text-lg'
         />
          </div>
         
          <div>
      
        <input type="text"
         placeholder='enter your Phone number'
         className='md:w-[250px] w-full py-2 border rounded-md border-gray-400 px-2 text-lg'
         />
          </div>
        </div>
       </label>
           
           {/* button */}
           <div className='mt-8 md:ml-36'>
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
