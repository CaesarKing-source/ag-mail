import React from 'react'
import Navbar from './components/shared/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { openMail } = useSelector(state => state.app);
  return (
    <div className='min-h-screen w-full'>
      <Toaster position="top-right" reverseOrder={false}/>
      { openMail && <SendMail /> }
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
