import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";

export const sidebarMenus = [
    {
        id: 1,
        title: 'Inbox',
        icon: <MdInbox size={20} />
    },
    {
        id: 2,
        title: 'Starred',
        icon: <FaRegStar size={20} />
    },
    {
        id: 3,
        title: 'Draft',
        icon: <RiDraftLine size={20} />
    },
    {
        id: 4,
        title: 'Send',
        icon: <AiOutlineSend size={20} />
    },
    {
        id: 5,
        title: 'Trash',
        icon: <FaRegTrashAlt size={20} />
    },
    
]

export const mailType = [
    {
        id: 1,
        type: 'Important',
        icon: <MdLabelImportantOutline size={20} />
    },
    {
        id: 2,
        type: 'Social',
        icon: <MdOutlineSocialDistance size={20} />
    }
]