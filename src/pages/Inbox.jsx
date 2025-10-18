import React, { useState } from 'react'
import { MdCropSquare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { IoMdMore } from "react-icons/io";
import { mailType } from '../data/constant';
import MailContainer from '../components/shared/MailContainer';
import { GoRead } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Inbox = () => {
  const [selectedMailType, setSelectedMailType] = useState(0);
  return (
    <div className='flex-1 bg-gray-800 rounded-md mx-3 p-3 relative'>
      <div className="flex justify-between items-center">
        <div className="flex items-center py-2">
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <MdCropSquare size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <TbReload size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <GoRead size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p>1-10 of 1000</p>
          <button className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoIosArrowBack size={20} /></button>
          <button className="p-2 rounded-full hover:bg-gray-600 cursor-pointer">
            <IoIosArrowForward size={20} /></button>
        </div>
      </div>
    
      <div className="flex justify-between items-center gap-2 py-2 border-b-[1px] border-b-gray-600">
        <div className="flex items-center">
          <IoMdArrowDropdown size={20} />
          <h2 className='text-lg font-medium'>Inbox Mails</h2>
        </div>
        <div className="flex items-center gap-5">
          {
            mailType?.map((mail, index) => (
              <div key={index} onClick={() => setSelectedMailType(index)} 
              className={`${selectedMailType === index ? 'border-b-2 border-b-amber-100' : 'border-b-2 border-b-transparent'} flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-600`}>
                {mail.icon}
                <p>{mail.type}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="h-[68vh] overflow-auto mb-2">
          <MailContainer />
      </div>
    </div>
  )
}

export default Inbox
