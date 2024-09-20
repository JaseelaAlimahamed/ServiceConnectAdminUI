import React from "react";
import Card from "../../components/reUsableComponents/Card";
import { CiLocationOn } from "react-icons/ci";

const userdetails = {
  location: "Jakarta, Indonesia",
  address: "Jakrata, Indonesia",
  phone: "+12 34567 890",
  email: "Hope@mail.com",
};
const UserDetails = () => {
  return (
    <div className="py-12  flex max-lg:flex-col gap-4 justify-around  p-4">
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
              Karen Hope
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
                  <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
                </div>

                <h3 className="userdetails_sub">{userdetails.location}</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex px-4">
                <p className="userdetails_tag ">Address:</p>
              </div>
              <div className="flex justify-center items-center gap-2 max-md:justify-start">
                <div className="bg-orange w-fit rounded-full p-3">
                  <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
                </div>
                <h3 className="userdetails_sub">{userdetails.address}</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex px-4">
                <p className="userdetails_tag ">Phone:</p>
              </div>
              <div className="flex justify-center items-center gap-2 max-md:justify-start">
                <div className="bg-orange w-fit rounded-full p-3">
                  <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
                </div>
                <h3 className="userdetails_sub">{userdetails.phone}</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex px-4 ">
                <p className="userdetails_tag ">Email:</p>
              </div>
              <div className="flex justify-center items-center gap-2 max-md:justify-start">
                <div className="bg-orange w-fit rounded-full p-3">
                  <CiLocationOn style={{ color: "#fff", fontSize: "1.5rem" }} />
                </div>
                <h3 className="userdetails_sub">{userdetails.email}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[26rem]">
        <div className="flex flex-col gap-5">
          <Card title="Recent Service Details" variant="medium" subtitle="Thursday,10th April,2021" />
          <Card
            title="Tap Repair"
            subtitle="Booked"
            sideColor={"bg-blue-800"}
            variant="large"
            date="March 20,2021"
            time="09.00-10.00 AM"
            name="Keshvan"
          />
          <Card
            title="Drain Blockage"
            subtitle="Complaint"
            sideColor={"bg-orange"}
            variant="large"
            date="March 20,2021"
            time="09.00-10.00 AM"
            name="Keshavan"
          />
          <Card
            title="Light Change"
            subtitle="Booked"
            sideColor={"bg-yellow"}
            variant="large"
            date="March 20,2021"
            time="09.00-10.00 AM"
            name="Keshavan"
          />
          <Card
            title="Fan Repair"
            subtitle="Booked"
            sideColor={"bg-dark_blue"}
            variant="large"
            date="March 20,2021"
            time="09.00-10.00 AM"
            name="Thomas"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
