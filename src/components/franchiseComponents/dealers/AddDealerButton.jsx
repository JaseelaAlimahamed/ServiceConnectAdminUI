import React from 'react'
import {   IoMdAdd    } from "react-icons/io";
function AddDealerButton() {
  return (
    <button className='flex items-center  justify-center gap-1 text-white bg-violet py-2.5 px-5 rounded-full'>
        <span><IoMdAdd/></span>
        <span className='text-sm '>New Dealers</span>
    </button>
  )
}

export default AddDealerButton