import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
function Franchisee({
  franchiseename,
  validity,
  contactname,
  daysleft,
  address,
  phone,
  email,
}) {
  console.log(franchiseename)
  return (
    <div className="container border w-[100%] rounded-xl overflow-hidden h-fit  max-[1099px]:w-[150%]    ">
      <div className="bg-violet w-full h-36 relative">
        <div className="absolute aspect-square z-20  rounded-full m-2 p-2 w-48  bg-primary left-10 top-6">
          <div className="w-full bg-blue_gray h-full rounded-full"></div>
        </div>
        <div className="absolute flex justify-end items-end -bottom-[1px] z-10 -right-[-40px] ">
          <div className="bg-orange w-44 h-16 rounded-tl-3xl"></div>
          <div className="bg-yellow w-56 h-28 rounded-t-3xl"></div>
        </div>
      </div>
      {
        //title box
      }
      <div className="mt-24">
        <div className="mx-5">
          <h2 className="text-3xl font-poppins  font-bold text-dark_blue">
            {franchiseename}
          </h2>
          <p className="text-lg font-semibold text-light_gray">Franchisee</p>
          <p className="text-lg font-bold text-dark_blue">
            {daysleft}days left{" "}
            <span className="ml-5"> Valid up to {validity} </span> 
          </p>
        </div>
        <div className="grid grid-cols-4   mx-5 my-5 max-[870px]:grid-cols-2  max-[390px]:grid-cols-1">
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2 text-light_gray">Contact name:</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              
                <MdAccountBox style={{ color: "#fff", fontSize: "1.5rem" }} />
              </div>
              <h2 className="ml-2 font-bold text-blue-950">{contactname} </h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2 text-light_gray">Address:</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
                <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
              </div>
              <h2 className="ml-2 font-bold text-blue-950">{address}</h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2 text-light_gray">Phone:</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              <CiPhone 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              </div>
              <h2 className="ml-2 font-bold text-blue-950">{phone}</h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2 text-light_gray">Email address:</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              <CiMail 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              /> 
              </div>
              <h2 className="ml-2 font-bold text-blue-950">{email}</h2>{" "}
            </div>
            
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Franchisee;
