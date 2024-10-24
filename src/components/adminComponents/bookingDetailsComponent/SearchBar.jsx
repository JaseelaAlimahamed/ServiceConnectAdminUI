import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-white text-gray-500 rounded-full pl-12 pr-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-purple-500 absolute left-4 top-3" />
      </div>
    </div>
  )
}

export default SearchBar