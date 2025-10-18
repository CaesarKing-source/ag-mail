import React from 'react'
import Navbar from './components/shared/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
