import React, { useState } from 'react'
import { MdCropSquare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { IoMdMore } from "react-icons/io";
import { GoRead } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Draft = () => {
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
          <h2 className='text-lg font-medium'>Draft Mails</h2>
        </div>
      </div>
    </div>
  )
}

export default Draft
