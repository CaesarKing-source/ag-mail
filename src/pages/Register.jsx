import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../store/slice/userSlice';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase.config';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    photo: ""
  });
  const { fullName, email, password, photo } = registerData;
  
  const dispatch = useDispatch();
  const handleInput = async (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if(!fullName || !email || !password) {
      toast.error('Kindly fill the credentials');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // update display name & photo
      await updateProfile(result.user, {
        displayName: fullName,
        photoURL: photo || 'https://avatar.iran.liara.run/public/boy'
      });

      dispatch(setUser({
        displayName: fullName,
        email: result.user.email,
        photoURL: photo
      }));
      dispatch(setIsAuth(true));
      toast.success('Register Successful');
      navigate('/');
    }
    catch(err) {
      toast.error(err.message);
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
          <h2 className='text-2xl font-semibold'>Register User</h2>
          <form className='flex flex-col gap-5 w-full mt-10'>
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="text" placeholder='John Doe' name='fullName' value={fullName} onChange={handleInput} />
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="email" placeholder='example@mail.com' name='email' value={email} onChange={handleInput} />
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="password" name="password" placeholder='******' value={password} onChange={handleInput} />
            <input className='border-[1px] border-gray-200 p-2 w-full rounded' type="text" 
            name="photo" placeholder='photo url' value={photo} onChange={handleInput} />
            <button onClick={handleRegister} className='mt-2 bg-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-600'>
              Register</button>
          </form>
           
          <p className='text-sm mt-10'>Already have an account ? <Link to='/login'>Login</Link> </p>
        </div>
        <p className='text-sm font-regular absolute bottom-5'>
          Copyright @2025 . Akshay Giri</p>
    </div>
  )
}

export default Register
