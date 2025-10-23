import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, githubAuth, googleAuth } from '../config/firebase.config';
import { useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../store/slice/userSlice';
import { IoMailUnreadOutline } from "react-icons/io5";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = loginData;
  const navigate = useNavigate();
  
  const dispatch = useDispatch();  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
      dispatch(setUser({
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL
      }));
      dispatch(setIsAuth(true));
      toast.success('User Login Successful');
      navigate('/');
    }
    catch(err) {
      toast.error(`Error! try again later`);
      console.log(err);
    }
  }

  const handleInput = async (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      toast.error('Kindly fill the credentials');
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        displayName: result.user.displayName || result.user.email.split('@')[0],
        email: email,
        photoURL: result.user.photoURL || 'https://avatar.iran.liara.run/public/boy'
      }));
      dispatch(setIsAuth(true));
      toast.success('Login successful');
      navigate('/');
    }
    catch(err) {
      toast.error('Invalid Credentials');
      console.log(err);
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
      <div className='p-8 w-[600px] h-auto bg-gray-800 flex flex-col items-center gap-3 rounded-md'>
          <div className="flex items-center gap-2">
            <h2 className='font-semibold text-xl'>AG Mail</h2>
            <IoMailUnreadOutline size={26} />
          </div>
          <h2 className='text-2xl font-semibold'>Welcome User</h2>
          <form className='flex flex-col gap-5 w-full mt-10'>
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="email" placeholder='example@mail.com' name='email' value={email} onChange={handleInput} />
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="password" name="password" placeholder='******' value={password} onChange={handleInput} />
            <button onClick={handleLogin} className='mt-2 bg-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-600'>
              Login</button>
          </form>
          <button onClick={signInWithGoogle} className='flex justify-center items-center gap-2 mt-2 bg-gray-500 p-2 rounded-md hover:bg-gray-600 w-full cursor-pointer'>
          <FaGoogle size={20} />  Login with Google</button>        
          <p className='text-sm mt-10'>Don't have an account ? <Link to='/register'>Register</Link></p>
        </div>
        <p className='text-sm font-regular absolute bottom-5'>
          Copyright @2025 . Akshay Giri</p>
    </div>
  )
}

export default Login
