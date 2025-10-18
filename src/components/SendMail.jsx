import React from 'react'
import { IoClose } from "react-icons/io5";
import { AiOutlineExpandAlt } from "react-icons/ai";

const SendMail = () => {
  return (
    <div className="absolute to-0 left-0 right-0 w-full min-h-screen 
    overflow-hidden bg-gray-200/40 z-[999]">
        <div className='bg-[#000113] w-5xl shadow-xl shadow-slate-600 rounded-md'>
            <div className="flex justify-between items-center bg-gray-600 px-4 p-1">
                <h2 className='text-lg font-semibold'>New Mail</h2>
                <div className="flex items-center">
                    <div className="p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                        <AiOutlineExpandAlt size={20} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                        <IoClose size={20} />
                    </div>
                </div>
            </div>

            <form className='flex flex-col gap-2 px-4 py-2'>
                <input type="email" 
                className='border-b-[1px] border-b-gray-200 outline-none p-2' placeholder='To:' />
                <input type="email" 
                className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='CC:' />
                <span className='text-xs text-right cursor-pointer'>BCC</span>

                <input type="text"  
                className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='Subject' />
                <textarea rows={10} cols={50} className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='Message' />
                
                <button className='bg-gray-600 p-2 rounded-md my-2 cursor-pointer'>Send Mail</button>
            </form>
      
        </div>
    </div>
  )
}

export default SendMail
