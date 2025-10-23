import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import toast from 'react-hot-toast';

const MailMessage = () => {
  const navigate = useNavigate();
  const { selectedMail, activeTab } = useSelector(state => state.app);

  const handleTrashMail = async (id) => {
    try {
      const response = await updateDoc(doc(db, 'inbox-emails', id), { isActive: false });
      toast.success('Email moved to trash');
      navigate('/trash');
    }
    catch(err) {
      toast.error(err.message);
      console.log(err);
    }
  }

  const handleStarredMail = async (id) => {
    try {
      const response = await updateDoc(doc(db, 'inbox-emails', id), { isStarred: true });
      toast.success('Email moved to starred');
      navigate('/starred');
    }
    catch(err) {
      toast.error(err.message);
      console.log(err);
    }
  }

  const handlePrintMail = () => {
    const printContent = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>${selectedMail?.subject || "No Subject"}</h2>
        <p><strong>From:</strong> ${selectedMail?.from}</p>
        <p><strong>To:</strong> ${selectedMail?.to}</p>
        <hr />
        <p>${selectedMail?.message || "No message content."}</p>
      </div>
    `;
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write(printContent);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className='flex-1 bg-gray-800 rounded-md mx-3 p-3 relative'>
      <div className="flex justify-between items-center">
        <div className="flex items-center py-2">
          <div onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoArrowBack size={20} />
          </div>
          <div onClick={() => handleStarredMail(selectedMail?.id)} className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaRegStar size={20} />
          </div>
          <div onClick={() => handleTrashMail(selectedMail?.id)} className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaRegTrashAlt size={18} />
          </div>
          <div onClick={handlePrintMail} className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
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
        <h2 className='text-2xl font-semibold text-white'>{selectedMail?.subject}</h2>
        <p className='bg-gray-600 px-2 py-1 rounded'>{activeTab}</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className='text-sm text-gray-300'>
          <p className='font-medium'>From:
          <span className='font-normal ml-2'>{selectedMail?.from}</span></p>
          <p className='font-medium'>to: 
          <span className='font-normal ml-2'>{selectedMail?.to}</span></p>
        </div>
        <p className='text-xs gray-300'>{selectedMail?.createdAt}</p>
      </div>
      <hr />

      <div className="flex h-[65vh]">
        <p className='mt-5'>{selectedMail?.message}</p>
      </div>
    </div>
  )
}

export default MailMessage
