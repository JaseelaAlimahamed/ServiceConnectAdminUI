import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const UserProfile = ({name,location,address,phone,email}) => {
  return (
    <div className="container border max-w-screen-lg  rounded-xl overflow-hidden h-fit border-none bg-white">
    <div className="bg-violet w-full h-36 relative">
      <div className="absolute aspect-square z-20  rounded-full m-2 p-2 w-48  bg-primary left-5 top-6">
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
      <div className="ml-4">
        <h2 className="text-3xl font-poppins  font-bold text-dark_blue"style={{fontSize:"20px"}}>
          {name}
        </h2>
        <p className="text-xm font-semibold text-light_gray">User</p>
      </div>
      <div className="flex max-md:flex-col  gap-4 pl-4 pb-3 pt-3">
        <div className="flex flex-col ">
          <div className="flex">
            <p className="userdetails_tag " style={{fontSize:"12px"}}>Location:</p>
          </div>

          <div className="flex gap-1 justify-center items-center max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-1">
              <CiLocationOn
                style={{ color: "#fff", fontSize: "1rem" }}
              />
            </div>

            <h3 className="userdetails_sub" style={{fontSize:"11px"}}>{location}</h3>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex px-4">
            <p className="userdetails_tag " style={{fontSize:"12px"}}>Address:</p>
          </div>
          <div className="flex justify-center items-center gap-1 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-1">
              <CiLocationOn
                style={{ color: "#fff", fontSize: "1rem" }}
              />
            </div>
            <h3 className="userdetails_sub" style={{fontSize:"11px"}}>{address}</h3>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex ">
            <p className="userdetails_tag " style={{fontSize:"12px"}}>Phone:</p>
          </div>
          <div className="flex justify-center items-center gap-1 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-1">
            <FiPhone 
                style={{ color: "#fff", fontSize: "1rem" }}
              />
            </div>
            <h3 className="userdetails_sub" style={{fontSize:"11px"}}>{phone}</h3>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex">
            <p className="userdetails_tag " style={{fontSize:"12px"}}>Email:</p>
          </div>
          <div className="flex justify-center items-center gap-1 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-1">
              <CiMail 
                style={{ color: "#fff", fontSize: "1rem" }}
              />
            </div>
            <h3 className="userdetails_sub" style={{fontSize:"11px"}}>{email}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile