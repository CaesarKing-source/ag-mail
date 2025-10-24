import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMail } from '../../store/slice/appSlice';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import toast from 'react-hot-toast';

const Mail = ({ mail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formattedMail = {
    ...mail,
    createdAt: mail.createdAt.toDate().toISOString()
  }
  const openMail = () => {
    dispatch(setSelectedMail(formattedMail));
    navigate(`/mail/inbox/${mail?.id}`);
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

  return (
    <div onClick={openMail} className='flex items-start justify-between p-2 border-b-[1px] border-b-gray-400 text-sm px-2 hover:bg-gray-600 hover:shadow-md cursor-pointer'>
        <div className="flex items-center text-gray-300 gap-3">
            <div className="flex-none">
                <MdCropSquare size={16} />
            </div>
            <div onClick={() => handleStarredMail(mail?.id)} className="flex-none">
                <FaRegStar size={16} />
            </div>
        </div>
        <div className="ml-4 truncate inline-block">
            <p className='font-semibold'>{mail?.displayName}</p>
        </div>
        <div className="flex-1 ml-4 max-w-[55dvw]">
            <p className="truncate text-gray-300">
                {mail?.message}
            </p>
        </div>
        <div className="flex-none">
            <p className='font-regular text-sm'>
                {new Date(mail?.createdAt?.seconds*1000).toUTCString()}
            </p>
        </div>
    </div>
  )
}

export default Mail
