import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Mail = () => {
  const navigate = useNavigate();
  const openMail = () => {
    navigate('/mail/inbox/124981')
  }
  return (
    <div onClick={openMail} className='flex items-start p-2 border-b-[1px] border-b-gray-400 text-sm px-2 
    hover:bg-gray-600 hover:shadow-md cursor-pointer'>
        <div className="flex items-center text-gray-300 gap-3">
            <div className="flex-none">
                <MdCropSquare size={16} />
            </div>
            <div className="flex-none">
                <FaRegStar size={16} />
            </div>
        </div>
        <div className="ml-4 truncate inline-block">
            <p className='font-semibold'>Akshay Giri</p>
        </div>
        <div className="flex-1 ml-4 truncate inline-block text-gray-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, pariatur?</p>
        </div>
        <div className="flex-none">
            <p className='font-medium'>20/03/2035 <span>8:00 PM</span></p>
        </div>
    </div>
  )
}

export default Mail
