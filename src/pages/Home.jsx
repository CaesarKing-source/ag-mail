import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[88vh] w-full flex mt-2">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Home
