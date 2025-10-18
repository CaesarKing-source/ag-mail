import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const MailMessage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex-1 bg-gray-800 rounded-md mx-3 p-3 relative'>
      <div className="flex justify-between items-center">
        <div className="flex items-center py-2">
          <div onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoArrowBack size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaRegStar size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaRegTrashAlt size={18} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <BsPrinter size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoMailUnreadOutline size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <h2 className='text-2xl font-semibold text-white'>Subject: This is a test subject</h2>
        <p className='bg-gray-600 px-2 py-1 rounded'>inbox</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className='text-sm text-gray-300'>
          <p className='font-medium'>From: Anshika Kela 
          <span className='font-normal'>anshikak@gmail.com</span></p>
          <p className='font-medium'>to: me</p>
        </div>
        <p className='text-xs gray-300'>August 24, 2025, 8:00PM</p>
      </div>
      <hr />

      <div className="flex h-[65vh]">Hey Peter,\n\nWelcome to our AG Mail project! 🎉
      This is a test email to confirm that your inbox view and message renderer are working correctly.</div>
    </div>
  )
}

export default MailMessage
