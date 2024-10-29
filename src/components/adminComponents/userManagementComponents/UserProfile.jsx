import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const UserProfile = ({name,location,address,phone,email}) => {
  return (
    <div className="container border max-w-screen-lg  rounded-xl overflow-hidden h-fit">
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
          {name}
        </h2>
        <p className="text-lg font-semibold text-light_gray">User</p>
      </div>
      <div className="flex max-md:flex-col  gap-6 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex px-4">
            <p className="userdetails_tag ">Location:</p>
          </div>

          <div className="flex gap-3 justify-center items-center max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
              <CiLocationOn
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </div>

            <h3 className="userdetails_sub">{location}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex px-4">
            <p className="userdetails_tag ">Phone:</p>
          </div>
          <div className="flex justify-center items-center gap-2 max-md:justify-start">
            <div className="bg-orange w-fit rounded-full p-3">
            <FiPhone 
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </div>
            <h3 className="userdetails_sub">{phone}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile