import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
const Error = () => {
  return (
    <div className='flex justify-center items-center py-16'>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
     
      <img src="https://i.ibb.co.com/prPmG6xw/error-removebg-preview.png" className='w-96 animate-bounce' alt="" />

    
      

    
      <h2 className="text-3xl font-bold text-red-600 mb-8 animate-bounce">
      Coming soon...
      </h2>

      
      <p className="text-gray-600 text-center text-[17px] font-medium max-w-md mb-8">
      The project is currently in progress, which is why the link has not been provided yet. The link will be added very soon
      </p>

      
      <Link
        to="/" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition duration-300"
      >
        <FaHome className="mr-2" /> Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default Error