import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../../service/api/admin/GetApi";

const ProfileSidebar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserProfile();

        // Extract and format user details
        const userDetails = {
          image: data.profile_picture || "https://via.placeholder.com/150",
          name: data.full_name || "N/A",
          location: data.department || "N/A",
          country: data.designation || "N/A",
          role: data.role || "N/A",
          phone: data.mobile_number || "N/A",
          email: data.email || "N/A",
          pdt: data.certifications || "N/A",
        };

        setUser(userDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);

        // Handle token expiration or other errors
        if (error?.status === 401) {
          setError("Session expired. Please log in again.");
          localStorage.removeItem("access");
        } else {
          setError("Failed to fetch user details. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center mt-2 mx-2 md:mx-0">
      <img
        src={user.image}
        alt={user.name}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 rounded-full mb-4 border-4 p-1 border-pink-500"
      />
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        {user.name}
      </h2>
      <p className="text-gray-500 text-center">
        {user.location}, {user.country}
      </p>
      <div className="border border-slate-400 border-x-neutral-50 mt-2 w-full flex items-center justify-center py-3">
        <p className="flex items-center space-x-2 font-semibold">
          <span className="mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          <span>{user.role}</span>
        </p>
      </div>
      <div className="mt-4 space-y-2 w-full px-4 sm:px-6 md:px-8">
        <p className="flex items-center gap-2 text-gray-600">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </span>
          <span>{user.phone}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-600">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <span>{user.email}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
