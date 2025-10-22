import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setSearchMail } from '../../store/slice/appSlice';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchMail(searchInput));
  }, [searchInput]);
  return (
    <div className='flex justify-between items-center mx-4 h-16 border-b-[1px] border-b-gray-600'>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
            <div className="p-3 rounded-full hover:bg-gray-800 cursor-pointer">
                <RxHamburgerMenu size={20} />
            </div>
            <h2 className='font-semibold text-xl'>AG Mail</h2>
            <IoMailUnreadOutline size={26} />
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-50">
        <div className="flex items-center bg-gray-800 px-5 py-2 rounded-md">
            <IoIosSearch size={20} className='mr-2' />
            <input className='w-full bg-transparent border-0 outline-0' placeholder='search mail...'
            value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center">
            <div className="rounded-full p-3 hover:bg-gray-800 cursor-pointer">
                <BsQuestionCircle size={20} />
            </div>
            <div className="rounded-full p-3 hover:bg-gray-800 cursor-pointer">
                <IoSettingsOutline size={20} />
            </div>
            <div className="rounded-full border-2 border-gray-100 p-1 cursor-pointer">
              <img className='h-[30px] w-[30px] rounded-full object-cover object-center' 
              src='https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
