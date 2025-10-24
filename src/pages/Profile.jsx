import { signOut } from 'firebase/auth';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store/slice/userSlice';
import { auth } from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logout Successful');
      dispatch(setUser(null));
      navigate('/login');
    }
    catch(err) {
      console.log(err);
      toast.error(err.message);
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div className="p-8 w-[600px] h-auto bg-gray-800 flex flex-col items-start gap-3 rounded-md">
        <div className="profile-details">
          <h2 className='text-2xl font-semibold'>Basic Info</h2>
          <p className='text-md text-gray-400'>
            Some info may be visible to other people using Google services</p>
        </div>

        <div className="w-full flex justify-between items-center mt-10">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover p-2 border-2 border-gray-300"
          />

          <div className='flex flex-col gap-2'>
            {/* User Details */}
            <div className="flex justify-between items-center gap-5 flex-1">
              <p className='text-sm font-regular'>Display Name:</p>
              <p className="text-start font-medium">{user.displayName}</p>    
            </div>

            <div className="flex justify-between items-center gap-5 flex-1">
              <p className='text-sm font-regular'>Email:</p>
              <p className="text-start font-medium">{user.email}</p>    
            </div>

            <button onClick={handleLogout} 
            className='mt-2 bg-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-600'>
              Logout</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Profile
