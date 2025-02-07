import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  
   const navigate = useNavigate();

  const handleChange = (event)=>{
     setFormData({...formData, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = async(event)=>{
    event.preventDefault();
    
    if(!formData.email || !formData.password) {
      toast.error("Email iyo password-ka waa in la buuxiyaa");
      return;
    }

    try {
      const response =  await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`,formData);
      const token = response.data.token;
      if(token){
        localStorage.setItem("token", token)
        navigate("/Home")
      }else{
        toast.error("Email ama password-ka waa khalad")
      }
       
     
    } catch (error) {
      toast.error("Server-ka ayaa xanuunsan")
    }

  }

  return (
    <div className='bg-gradient-to-r from-orange-400 to-orange-500 min-h-screen'>
      <nav className='bg-white p-8 flex gap-4'>
        <h1 className='text-[#ff6600e2] font-bold text-2xl '>Alibaaba.com</h1>
        <select className='px-6 rounded border-none'>
          <option>english</option>
          <option>somali</option>
        </select>
      </nav>

      <main className=''>
        <form 
        onSubmit={handleSubmit}
        className=' md:flex px-8 md:px-0 justify-between items-center'>
        <div className='md:pl-24 mt-4 md:mt-0'>
          <h1 className='text-2xl md:text-5xl font-bold text-white '>welcome parks await</h1>
          <p className='text-2xl text-white font-semibold'>unlock us 20$ per weeks for new sales</p>
        </div>
        
        <div className='bg-white p-8 mr-8 w-[450px] rounded-lg mt-12'>
         <div>
         <label className='text-1xl font-bold' >Email</label>
         <br />
          <input type="text-xl cap-talize" 
          className='py-2 w-full p-2 mb-2 mt-2 border border-gray-800  focus:outline-none'
          placeholder='enter Your email'
          onChange={handleChange}
          name='email'/>
          
         </div>

         <div>
         <label className='text-1xl font-bold' >password</label>
         <br />
          <input type="text-xl cap-talize" 
          className='py-2 w-full p-2 mb-2 mt-2 border border-gray-800 focus:outline-none'
          placeholder='enter Your password'
          onChange={handleChange}
          name='password'
          />
         </div>
      

          <button type='submit' className='w-full px-4 py-2 bg-[#ff6600e2] rounded text-white font-bold mt-2'>SignIn</button>

          <div className='flex justify-between text-blue-500 mt-4 capitalize'>
            <span>mobile number sign</span>
            <span>Create account</span>
          </div>

          <hr className='mt-4 border border-gray-700'/>

          <div>
            <h4>sing with </h4>

          </div>
            
        </div>
        </form>
      </main>
      <ToastContainer />
    </div>
  )
}

export default Login
