import React from 'react'
import { useState } from 'react';

function FranchiseeDetails() {

    const franchiseData =
        {
            name: "frachise name",
            id: "franchise_id",
            details :" this is franchise details",
            about : " this section is about franchise",
            contact:
            {
             address: "address location",
             phoneNumber :+9112345678 ,
             email : "franchise@email.com",
             whatsApp : +918765432
            }
 
        }
    
   
    

  return (
    <div className='flex  md:mt-10 justify-center p-4 '>
         <div className="w-full  max-w-4xl bg-primary shadow-md rounded-xl p-6 md:p-8">

            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-start">

                    <div className="w-64 h-48  rounded-lg bg-gray  shadow-md  ">
                                <img src="" alt="photo" />
                    </div>
          
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <h2 className="text-2xl font-semibold">{franchiseData.name}</h2>
                        <p className="text-id_gray">id: {franchiseData.id}</p><br/><br/>
                        <p className="mt-2 text-id_gray">{franchiseData.details}</p>
                            
                    </div>
            
            </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                                <div className=' p-6 md:p-8'>
                                    <h3 className="text-xl font-semibold mb-4">About</h3>
                                    <p className="text-id_gray">{franchiseData.about}</p>
                                </div>
                                
                                <div className='  p-6 md:p-8 leading-loose'>
                                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                                    <p className="text-id_gray">Address: {franchiseData.contact.address}</p>
                                    <p className="text-id_gray">Contact: {franchiseData.contact.phoneNumber}</p>
                                    <p className="text-id_gray">Email: {franchiseData.contact.email}</p>
                                    <p className="text-id_gray">Whatsapp: {franchiseData.contact.whatsApp}</p>
                                </div>
            </div>

        </div>
    </div>
  )
}

export default FranchiseeDetails
