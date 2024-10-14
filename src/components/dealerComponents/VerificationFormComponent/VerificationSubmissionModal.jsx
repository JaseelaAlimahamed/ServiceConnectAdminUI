import React from 'react'

import { IoIosWarning } from "react-icons/io";

function VerificationSubmissionModal({     }) 
{
  return (
   <div className='fixed w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className={` flex flex-col gap-5  justify-center items-center  border-4  rounded-[30px] shadow-2xl px-7 py-10`}>
            <IoIosWarning size="4rem" />
            <p className='font-bold text-xl'>{heading}</p>
            <p>Verification submitted successfully</p>
            <div className='flex  gap-5'>
            <button onClick={()=>{ }}>OK</button>
            </div>
        </div>
        </div>
       
    
  )
}



export default VerificationSubmissionModal
