import React from 'react'
import { IoMdArrowDropleft , IoMdArrowDropright  } from "react-icons/io";

function DealerPagination() {
  return (
    <div className='flex flex-col items-center gap-2  justify-between sm:gap-0 sm:flex-row'>
        <div className='text-sm text-light_gray'>
            Showing <span className='text-dark_blue'>1-5</span> from <span className='text-dark_blue'>100</span> data 
        </div>
        <div className='flex items-center gap-1.5'>
            <button><IoMdArrowDropleft size={30} className='text-light_gray' /></button>
            <button className='w-8 h-8 text-sm rounded-full text-white bg-violet flex justify-center items-center'>1</button>
            <button className='w-8 h-8 text-sm rounded-full text-light_gray border border-light_gray  flex justify-center items-center'>2</button>
            <button className='w-8 h-8 text-sm rounded-full text-light_gray border border-light_gray flex justify-center items-center'>3</button>
            <button><IoMdArrowDropright size={30} className='text-light_gray' /></button>
        </div>
    </div> 
  )
}

export default DealerPagination
