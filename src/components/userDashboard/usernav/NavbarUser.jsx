import React from 'react'

function NavbarUser() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40" // Replace with your logo URL
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Right Side: Profile, Notification, and Logout */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Image and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Replace with your profile image URL
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-gray-800 font-medium">John Doe</span>
        </div>

        {/* Logout Button */}
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default NavbarUser