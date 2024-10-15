import React from 'react'
import { FaPerson } from "react-icons/fa6";

function Dealerinfocard({title,number,percentage}) {
  return (
    <div className='bg-white w-[260px] h-[120px] rounded-lg flex items-center'>
            <div className=' bg-violet flex items-center justify-center  text-2xl text-white size-14 rounded-full ml-[10%]'> <FaPerson ></FaPerson> </div>
            <div className='ml-[5%]'><p>{title}</p>
                 <p className='text-blue-900 text-2xl font-bold'>{number}</p>
                  <p><span className='text-green-600 font-semibold'>{percentage > 0 ? `+${percentage}`  :`-${percentage}` } </span>  than last month</p>
            </div>
        </div>
  )
}

export default Dealerinfocard