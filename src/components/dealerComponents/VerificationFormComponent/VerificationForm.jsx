import React, { useState } from 'react'
import InputFieldComponent from '../../reUsableComponents/InputFieldComponent'
import Dropdown from '../../adminComponents/CategorySubCategory/AddEditSubCategory/addSubCategoryitems/SubCategoryDropDown'

function ServiceProviderVerificationForm() {

    
    const [inspectorName,setinspectorName]=useState("")
    const [inspectorRole,setinspectorRole]=useState("")
    const [membersName,setmembersName]=useState("")                    //initialising states 
    const [verificationDate,setverificationDate]=useState()
    const [supportingDocument,setsupportingDocument]=useState("")
    const [verificationStatus,setverificationStatus]=useState("")

    const clearField=()=>{
      setinspectorName("")
      setinspectorRole("")
      setmembersName("")
      setverificationDate()              // on clicking cancel, aal states are reset
      setsupportingDocument("")
      setverificationStatus("")
      console.log( "data on clicking cancel , states are reset" )
    }


    let verificationFormData={
      inspectorName :inspectorName,
      inspectorRole:inspectorRole ,
      membersName :membersName,                    // bundling states to a single object , to be sent 
      verificationDate :verificationDate,
      supportingDocument : supportingDocument,
      verificationStatus :verificationStatus
    }
   

    const OnSubmit=(e)=>{   
      
      const allValuesNotNull = Object.values(verificationFormData).every(value => value !== "" && value!==undefined);  // verification of null data on clicking submit
     if(allValuesNotNull)
        console.log(("sending data", verificationFormData))
     else
        console.log("form contains one or more invalid/empty data")
       
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
                      <option value="License">License</option>
                      <option value="certification">certification</option>
                      <option value="id"> ID</option>
              </select>         
         </div>
         <div className='leading-8'>
                <label>Documents Upload  </label>
                <InputFieldComponent
                type="file"
                placeholder=" upload "
                value={verificationDate}
                onChange={(date) => {
                                    const d = new Date(date).toLocaleDateString('fr-FR')
                                    setverificationDate(d)
                                    }
                          }
               color="bg-[#FFFFFF] border-2 border-[#E5E7EB]  rounded-lg  "
                />
         </div>
         <div className='leading-8'>
                    <label>verification Status   </label>
                    <select className='bg-[#FFFFFF] border-2 border-[#E5E7EB] h-10  border border-[#E5E7EB] 
                                        rounded-lg  focus:border-[#28B5E1] block w-full  pl-4 '
                            onChange={(e)=>{setverificationStatus(e.target.value)}  }
                            value={verificationStatus}            >
                            <option value="" disabled >select</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected </option>
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
