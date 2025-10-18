import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { sidebarMenus } from '../../data/constant.jsx';

const Sidebar = () => {
  return (
    <div className='w-[15%] border-r-[1px] border-r-gray-600'>
        <div className="p-3">
            <button className='flex items-center gap-2 p-4 rounded-2xl mb-4 bg-gray-800 hover:shadow-gray-600 hover:shadow-md'>
                <MdOutlineEdit size={25} />
                Send Mail
            </button>
            <div className="flex flex-col gap-2">
                {
                    sidebarMenus.map((menu) => {
                        return (
                            <div key={menu.id} 
                            className='flex items-center gap-5 p-2 rounded-md hover:bg-gray-600 cursor-pointer'>
                                <p>{menu.icon}</p>
                                <p>{menu.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
