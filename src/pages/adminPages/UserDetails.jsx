import React from "react";

const UserDetails = () => {
  return (
    <div >
      <div className="container mx-auto border max-w-screen-lg h-96  rounded-xl overflow-hidden">
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
                <h2 className="text-3xl font-poppins  font-bold text-dark_blue">Karen Hope</h2>
                <p className="text-lg font-semibold text-light_gray">User</p>
            </div>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
