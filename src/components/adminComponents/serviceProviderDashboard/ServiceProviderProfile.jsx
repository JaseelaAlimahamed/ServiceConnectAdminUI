import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { PiStarFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import ButtonComponent from "../../dealerComponents/verificationComponents/DealerButton";

const UserProfile = ({ name, franchise, address, phone, email, username }) => {
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="container shadow-md max-w-screen-lg  rounded-xl overflow-hidden h-fit bg-white">
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
          <div className="flex items-center gap-10 w-full max-sm:flex-col">
            <h2 className="text-2xl font-poppins font-bold min-w-fit text-dark_blue">
              {name}
            </h2>
            <div className="flex justify-between max-sm:flex- items-center w-full">
              <div className="flex rating justify-center items-center gap-1">
                <PiStarFill className="text-yellow text-4xl"/>
                <span className="text-2xl font-poppins font-bold text-dark_blue">
                  4.9
                </span>
              </div>
              <div className="flex justify-center flex-col items-center gap-1">
                <BsThreeDots
                  className="text-lg font-semibold cursor-pointer"
                  onClick={() => setEditToggle(!editToggle)}
                />
                <div className="flex">
                  {editToggle && (
                      <ButtonComponent
                        children="View"
                        className="hover:bg-slate-100 font-medium text-black shadow-md  "
                      />
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-light_gray">{username}</p>
        </div>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2  gap-10 p-6">
          <div className="flex flex-col gap-2 ">
            <div className="flex px-4">
              <p className="userdetails_tag ">Franchise:</p>
            </div>

            <div className="flex gap-3 justify-start items-center max-md:justify-start">
              <div className="bg-orange w-fit rounded-full p-3">
                <FaRegUser style={{ color: "#fff", fontSize: "1.25rem" }} />
              </div>

              <h5 className="userdetails_sub">{franchise}</h5>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex px-4">
              <p className="userdetails_tag ">Address:</p>
            </div>
            <div className="flex justify-start items-center gap-2 max-md:justify-start">
              <div className="bg-orange w-fit rounded-full p-3">
                <CiLocationOn style={{ color: "#fff", fontSize: "1.25rem" }} />
              </div>
              <h4 className="userdetails_sub">{address}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex px-4">
              <p className="userdetails_tag ">Phone:</p>
            </div>
            <div className="flex justify-start items-center gap-2 max-md:justify-start">
              <div className="bg-orange w-fit rounded-full p-3">
                <FiPhone style={{ color: "#fff", fontSize: "1.25rem" }} />
              </div>
              <h4 className="userdetails_sub">{phone}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex px-4">
              <p className="userdetails_tag">Email:</p>
            </div>
            <div className="flex justify-start items-center gap-2 max-md:justify-start">
              <div className="bg-orange w-fit rounded-full p-3">
                <CiMail style={{ color: "#fff", fontSize: "1.5rem" }} />
              </div>
              <h4 className="userdetails_sub">{email}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
