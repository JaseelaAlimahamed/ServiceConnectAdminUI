import React from 'react'
import { MdDoneOutline } from "react-icons/md";

function VerificationSubmissionModal({submissionModal ,setsubmissionModal   }) 
{
  return (
   <div className=' fixed  lg:left-1/5 inset-0 flex items-center justify-center   bg-[#797C7B] bg-opacity-50  '>
            <div className={` flex flex-col gap-5 h-4/5  w-1/3   lg:w-1/5 lg:h-2/5 justify-center items-center border-4  rounded-[30px] shadow-2xl p-5 bg-[#ffffff]`}>
            <MdDoneOutline  size="4rem" />
            <p className='font-bold text-xl'> Submitted </p>
            <p>Verification submitted successfully</p>
            
            <button className='border p-3 rounded-lg ' onClick={()=>{ setsubmissionModal(false)}}>OK</button>
           
        </div>
        </div>
       
    
  )
}



export default VerificationSubmissionModal
