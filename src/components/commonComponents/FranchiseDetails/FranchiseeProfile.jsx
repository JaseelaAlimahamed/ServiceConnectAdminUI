import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import profilePic from "../../../assets/dealerprofilepic";
import DealerEditButton from "./DealerEditButton";
import { franchisedetail } from "../../../service/api/dealer/GetApi";

function DealerDetails() {
  const [franchisee, setFranchisee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 

  const navigateToEditpage = () => {
    navigate("/franchise/dealer/editdealer");
  };

  const dealerdetails = {
    id: 3543324,
    name: "Anoai",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    address: "Bazzar Street",
    contact: 9878767656,
    email: "abc@gmail.com",
    whatsapp: 8977675656,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
  };

  //fetchFranchisee
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await franchisedetail();
        setFranchisee(result.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
                  src={dealerdetails.profilePic}
                  className="w-60 object-cover lg:w-80 h-40 lg:h-60 bg-blue_gray rounded-2xl mx-auto"
                />
              ) : (
                <img className="w-60 lg:w-80 h-40 lg:h-60 bg-blue_gray rounded-2xl mx-auto" />
              )}
            </div>

            {/* Dealer Information */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">
                {dealerdetails.name}
              </h3>
              <p className="text-light_gray font-poppins text-sm text-center lg:text-left">
                #id:{dealerdetails.id}
              </p>
              <p className="mt-4 lg:mt-8 text-light_gray font-poppins text-justify">
                {dealerdetails.description}
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
                {dealerdetails.about}
              </p>
            </div>

            {/* Contact Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">
                Contact
              </h3>

              {franchisee ? (
                <ul className="space-y-5 text-light_gray font-poppins mt-2">
                  <li>Address: {dealerdetails.address}</li>
                  <li>Contact: {franchisee.phone_number}</li>
                  <li>Email: {franchisee.email}</li>
                  <li>Whatsapp: {franchisee.phone_number}</li>
                </ul>
              ) : (
                <p className="text-light_gray font-poppins">
                  No contact data available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerDetails;
