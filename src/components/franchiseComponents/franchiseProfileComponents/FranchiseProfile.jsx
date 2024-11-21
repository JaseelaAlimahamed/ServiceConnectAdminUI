import React from "react";
import Sidebar from "../../adminComponents/layoutComponents/sidebar";
import NavBar from "../../adminComponents/layoutComponents/NavBar";
import EditProfile from "./EditProfile";
import FranchiseProfileSide from "./franchiseProfileSide";
import userimage from "../../../assets/FranchiseProfile/userimage.jpg"
const FranchiseProfile = () => {
  const user = {
    firstName: "Thomas",
    lastName: "Benny",
    location: "Kerala",
    country: "India",
    role: "Franchise",
    phone: "9072250274",
    email: "thomas@gmail.com",
    image:userimage,
    nationality: "Indian",
    designation: "",
    address : "kottayam, pala",
    password :"Change Password"
  };

  return (
    <div className="container bg-gray-50 min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-grow">
        <NavBar text="Franchise Profile" />
        <div className="flex flex-col md:flex-row p-4 gap-6">
          <FranchiseProfileSide user={user}/>
          <EditProfile user={user} onSubmit={(data) => console.log("Profile updated:", data)} />
        </div>
      </div>
    </div>
  );
};

export default FranchiseProfile;
