import React from 'react'
import { IoIosSearch     } from "react-icons/io";
function DealerSearchBar() {
  return (
    <div className='flex items-center rounded-full py-2 px-4 gap-2 bg-white'>
        <IoIosSearch size={24} className='text-violet'/>
        <input type='text' 
        placeholder='Search here ...'
        className='placeholder:text-sm focus:outline-none '></input>
    </div>
  )
}

export default DealerSearchBar