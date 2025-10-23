import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector(state => state.user);

  const handleLogout = () => {
    
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-6 w-[600px]">
        {/* Profile Image */}
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
        />

        {/* User Details */}
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
          <p className="text-gray-600">Email: {user.email}</p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-4 w-32 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
