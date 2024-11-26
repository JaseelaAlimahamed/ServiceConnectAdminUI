import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import profilePic from "../../../assets/dealerprofilepic";
import DealerEditButton from "./DealerEditButton";
import { getdealerProfile } from "../../../service/api/franchise/PostApi";

function DealerDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
 

 let [dealerdetails,setdealerdetails]=useState({})

  

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getdealerProfile(id);
     
     
      setdealerdetails(response.data)
    } catch (error) {
      console.error("Error occurred while fetching dealer profile:", error);
    }
  };

  fetchData(); 
}, [id]); 



  const navigateToEditpage = () => {
    navigate("/franchise/dealer/editdealer");
  };


  return (
    <>
      <div className="container mx-auto h-auto min-h-screen bg-blue_bg pt-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-primary w-full max-w-7xl mx-auto border border-indigo-50 rounded-xl p-6 lg:p-10">
          {/* Top Section - Dealer Info */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 relative">
            {/* Dealer Image */}
            <div className="flex-shrink-0 w-full lg:w-1/4 mb-6 lg:mb-0 mx-auto lg:mx-0 text-center">
              {dealerdetails?.profilePic ? (
                <img
                  src={dealerdetails.profile_image || "NO PHOTO AVAILABLE"}
                  className="w-60 object-cover lg:w-80 h-40 lg:h-60 bg-blue_gray rounded-2xl mx-auto"
                />
              ) : (
                <img className="w-60 lg:w-80 h-40 lg:h-60 bg-blue_gray rounded-2xl mx-auto" />
              )}
            </div>

            {/* Dealer Information */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">
                {dealerdetails.user?.full_name || "NA"}
              </h3>
              <p className="text-light_gray font-poppins text-sm text-center lg:text-left">
                #id:{dealerdetails.custom_id || "NA"}
              </p>
              <p className="mt-4 lg:mt-8 text-light_gray font-poppins text-justify">
                {dealerdetails.description || "No description available."}
              </p>
            </div>

            {/* Edit Button */}
            <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:translate-x-[-50%] text-center lg:text-right">
              <DealerEditButton
                bgColor="bg-violet"
                width="w-28"
                height="h-10"
                borderRadius="rounded-full"
                textColor="text-primary"
                onClick={navigateToEditpage}
                showIcon={false}
              >
                Edit
              </DealerEditButton>
            </div>
          </div>

          {/* Bottom Section - About and Contact */}
          <div className="flex flex-col lg:flex-row mt-8 lg:space-x-16 space-y-8 lg:space-y-0">
            {/* About Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">
                About
              </h3>
              <p className="text-light_gray font-poppins mt-2 text-justify">
                {dealerdetails.about || "About available."}
              </p>
            </div>

            {/* Contact Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">
                Contact
              </h3>
              <ul className="space-y-5 text-light_gray font-poppins mt-2">
                <li>Address: {dealerdetails.user?.address|| "NA"}</li>
                <li>Contact: {dealerdetails.user?.phone_number || "NA"}</li>
                <li>Email: {dealerdetails.user?.email || "NA"}</li>
                <li>Whatsapp: {dealerdetails.user?.watsapp || "NA"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerDetails;
