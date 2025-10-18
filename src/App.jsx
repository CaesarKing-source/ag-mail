import React from 'react'
import Navbar from './components/shared/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import SendMail from './components/SendMail'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <SendMail />
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
