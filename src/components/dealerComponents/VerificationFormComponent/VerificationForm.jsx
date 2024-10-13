import React, { useState } from 'react'
import InputFieldComponent from '../../reUsableComponents/InputFieldComponent'
import Dropdown from '../../adminComponents/CategorySubCategory/AddEditSubCategory/addSubCategoryitems/SubCategoryDropDown'

function ServiceProviderVerificationForm() {

    
    const [inspectorName,setinspectorName]=useState("")
    const [inspectorRole,setinspectorRole]=useState("")
    const [membersName,setmembersName]=useState("")
    const [verificationDate,setverificationDate]=useState()
    const [supportingDocument,setsupportingDocument]=useState("")
    const [verificationStatus,setverificationStatus]=useState("")

    const clearField=()=>{
      setinspectorName("")
      setinspectorRole("")
      setmembersName("")
      setverificationDate()
      setsupportingDocument("")
      setverificationStatus("")
      console.log( "data on clicking cancel", inspectorName,inspectorRole,membersName ,verificationDate,supportingDocument,verificationStatus)
    }

    const OnSubmit=(e)=>{       
      console.log( "sending data" ,inspectorName,inspectorRole,membersName ,verificationDate,supportingDocument,verificationStatus)
  
     e.preventdefault();

    }
   
    
  return (
    <div className='flex w-full justify-center mt-5'>
    <form className='   flex flex-col justify-center w-3/4 sm:w-2/3 md:3/5  lg:w-6/12 xl:w-2/5  shadow-2xl   rounded-xl bg-[#FFFFFF]'>
      <div className=' w-3/4  flex  flex-col justify-center  p-6 ml-8   gap-4 '> 
         <div className='leading-8'>
           <label >Inspector Name  </label>
            <InputFieldComponent
                type="text"
                value={inspectorName}
                placeholder="Enter Inspector Name"
                color="bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10 rounded-lg "
                onChange={(e) => setinspectorName(e.target.value)}
                
                />
         </div>    
         <div className='leading-8'>
           <label>Inspector Role </label>
            <InputFieldComponent
                type="text"
                placeholder="Enter Inspector Role"
                 value={inspectorRole}
                onChange={(e) => setinspectorRole(e.target.value)}
               color="bg-[#FFFFFF] border-2 border-[#E5E7EB]  h-10 rounded-lg"
                />
         </div>
         <div className='leading-8'>
           <label>Member's Name </label>
            <InputFieldComponent
                type="text"
                placeholder="Enter Member's Name"
                 value={membersName}
                onChange={(e) => setmembersName(e.target.value)}
               color="bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10 rounded-lg"
                />
         </div>
         <div className='leading-8'>
                <label>Date of Verification  </label>
                <InputFieldComponent
                type="date"
                placeholder=" Choose the Date"
                value={verificationDate}
                onChange={(date) => {
                                    const d = new Date(date).toLocaleDateString('fr-FR')
                                    setverificationDate(d)
                                    }
                          }
               color="bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10 rounded-lg  "
                />
         </div>

         <div className='leading-8'>
                <label>Supporting Documents  </label>
               <select className='bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10  border border-[#E5E7EB] 
                                   rounded-lg  focus:border-[#28B5E1] block w-full pl-4  '
                      onChange={(e)=>{setsupportingDocument(e.target.value)}}  
                      value={supportingDocument}      >
                      <option value="" disabled >select</option>
                      <option value="aadhar">Aadhar</option>
                      <option value="drivingLicense">Driver's License</option>
                      <option value="votersId">Voter's ID</option>
              </select>         
         </div>
         <div className='leading-8'>
                    <label>verification Status   </label>
                    <select className='bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10  border border-[#E5E7EB] 
                                        rounded-lg  focus:border-[#28B5E1] block w-full  pl-4 '
                            onChange={(e)=>{setverificationStatus(e.target.value)}  }
                            value={verificationStatus}            >
                            <option value="" disabled >select</option>
                            <option value="option1">option:1</option>
                            <option value="option2">option:2</option>
                            <option value="option3">option:3 </option>
                     </select>  
        </div>
   </div>
 
   <div className=' flex gap-x-6 lg:gap-x-16 p-8 mt-8 '>
      <button className=' rounded-xl px-5 py-0.5 bg-[#DC3546] text-[#FFFFFF]' onClick={clearField}>Cancel</button>
            <button  type ="submit" className=' rounded-xl px-5 py-0.5 bg-[#65558F] text-[#FFFFFF]' onClick={OnSubmit}>Confirm</button>
      
   </div>
      
 </form>
 </div>
  )
}

export default ServiceProviderVerificationForm
