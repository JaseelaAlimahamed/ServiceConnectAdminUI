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
  return (
    <div className="container border w-[100%] rounded-xl overflow-hidden h-fit   ">
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
        <div className="mx-10">
          <h2 className="text-3xl font-poppins  font-bold text-dark_blue">
            {franchiseename}
          </h2>
          <p className="text-lg font-semibold text-light_gray">User</p>
          <p className="text-lg font-bold text-dark_blue">
            {daysleft}days left{" "}
            <span className="ml-5"> Valid up to {validity} </span>
          </p>
        </div>
        <div className="grid grid-cols-4  gap-10 mx-10 my-5 max-[870px]:grid-cols-2 ">
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2">Contact name</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              
                <MdAccountBox style={{ color: "#fff", fontSize: "1.5rem" }} />
              </div>
              <h2 className="ml-2">Address</h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2">Contact name</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
                <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
              </div>
              <h2 className="ml-2">Address</h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2">Contact name</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              <CiPhone 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              </div>
              <h2 className="ml-2">Address</h2>{" "}
            </div>
            
          </div>
          <div className="flex flex-col">
             <p className="text-lg font-semibold mb-2">Contact name</p>

             <div className="flex items-center">
        
              <div className="bg-orange w-fit rounded-full p-3">
              <CiMail 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              /> 
              </div>
              <h2 className="ml-2">Address</h2>{" "}
            </div>
            
          </div>
        </div>

        <div className="flex max-md:flex-col  gap-6 p-6">
          {/* <div className="flex flex-col gap-2">
          <div className="flex px-4">
            <p className="userdetails_tag ">Contact name:</p>
          </div>

          <div className="flex gap-3 justify-center items-center max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
              <CiLocationOn
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </div>

            <h3 className="userdetails_sub">{contactname}</h3>
          </div>
        </div> */}
          {/* <div className="flex flex-col gap-2">
          <div className="flex px-4">
            <p className="userdetails_tag ">Address:</p>
          </div>
          <div className="flex justify-center items-center gap-2 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
              <CiLocationOn
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </div>
            <h3 className="userdetails_sub">{address}</h3>
          </div>
        </div> */}
          {/* <div className="flex flex-col gap-2">
          <div className="flex px-4">
            <p className="userdetails_tag ">Phone:</p>
          </div>
          <div className="flex justify-center items-center gap-2 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
            <CiPhone 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </div>
            <h3 className="userdetails_sub">{phone}</h3>
          </div>
        </div> */}
          {/* <div className="flex flex-col gap-2">
          <div className="flex px-4 ">
            <p className="userdetails_tag ">Email:</p>
          </div>
          <div className="flex justify-center items-center gap-2 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
              <CiMail 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />  
            </div>
            <h3 className="userdetails_sub">{email}</h3>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Franchisee;
