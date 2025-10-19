import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setMailOpen } from '../store/slice/appSlice';

const SendMail = () => {
  const dispatch = useDispatch();
  const [isbcc, setIsBcc] = useState(false);
  const [formData, setFormData] = useState({
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    message: '' 
  }); 
  const { to, cc, bcc, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="absolute to-0 left-0 right-0 w-full min-h-screen 
    overflow-hidden bg-gray-800/60 z-[999] flex justify-center items-center">
        <div className='bg-[#000113] w-5xl shadow-xl shadow-slate-600 rounded-md'>
            <div className="flex justify-between items-center bg-gray-600 px-4 p-1">
                <h2 className='text-lg font-semibold'>New Mail</h2>
                <div className="flex items-center">
                    <div className="p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                        <AiOutlineExpandAlt size={20} />
                    </div>
                    <div onClick={() => dispatch(setMailOpen(false))} 
                    className="p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                        <IoClose size={20} />
                    </div>
                </div>
            </div>

            <form className='flex flex-col gap-2 px-4 py-2'>
                <input type="email" value={to} onChange={handleChange} name='to'
                className='border-b-[1px] border-b-gray-200 outline-none p-2' placeholder='To:' />
                <input type="email" value={cc} onChange={handleChange} name='cc'
                className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='CC:' />
                <input type="email" value={bcc} onChange={handleChange} name='bcc'
                className={`${isbcc ? 'block' : 'hidden'} outline-none border-b-[1px] border-b-gray-200 p-2`} placeholder='BCC:' />
                <span onClick={() => setIsBcc(prev => !prev)} className='text-xs text-right cursor-pointer'>BCC</span>

                <input type="text" value={subject} onChange={handleChange} name='subject'
                className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='Subject' />
                <textarea rows={10} cols={50} value={message} onChange={handleChange} name='message'
                className='outline-none border-b-[1px] border-b-gray-200 p-2' placeholder='Message' />
                
                <button onClick={handleSubmit} className='bg-gray-600 p-2 rounded-md my-2 cursor-pointer 
                hover:bg-gray-800'>Send Mail</button>
            </form>
      
        </div>
    </div>
  )
}

export default SendMail
