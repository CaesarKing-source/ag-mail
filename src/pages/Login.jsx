import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuth } from '../config/firebase.config';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slice/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
    }
    catch(err) {
      toast.error(`Error! try again later`)
      console.log(err)
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
      <div className='p-8 w-[600px] h-[500px] bg-gray-800 flex flex-col items-center gap-3 rounded-md'>
        <h2 className='text-2xl font-semibold'>Welcome User</h2>
        <form className='flex flex-col gap-5 w-full mt-10'>
          <input className='border-[1px] border-gray-200 p-2 w-full rounded' 
          type="email" placeholder='example@mail.com' />
          <input className='border-[1px] border-gray-200 p-2 w-full rounded' 
          type="password" name="password" placeholder='******' />
          <button className='mt-2 bg-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-600'>
            Login</button>
        </form>
        <button onClick={signInWithGoogle} className='flex justify-center items-center gap-2 mt-2 bg-gray-500 p-2 rounded-md hover:bg-gray-600 w-full cursor-pointer'>
        <FaGoogle size={20} />  Login with Google</button>
        <button className='flex justify-center items-center gap-2 mt-2 bg-gray-500 p-2 rounded-md hover:bg-gray-600 w-full cursor-pointer'>
        <FaGithub size={20} />  Login with Github</button>
        
        <p className='text-sm mt-10'>Don't have an account ? <span>Register</span> </p>
      </div>
      <p className='text-sm font-regular absolute bottom-5'>
        Copyright @2025 . Akshay Giri</p>
    </div>
  )
}

export default Login
