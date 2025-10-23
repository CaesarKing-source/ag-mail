import React from 'react'
import Navbar from './components/shared/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'

const App = () => {
  const { openMail } = useSelector(state => state.app);
  const { isAuth } = useSelector(state => state.user);
  return (
    <div className='min-h-screen w-full'>
      <Toaster position="top-right" reverseOrder={false}/>
      { openMail && <SendMail /> }
      {/* { isAuth && <Navbar />} */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
