


import React,{ useState } from "react";
import { FaChevronDown, FaChevronUp, } from 'react-icons/fa';

const NewSubCategory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [collar, setCollar] = useState('');
  const [status, setStatus] = useState('Status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image] = useState(null); // State for image

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSave = () => {
    const newSubCategory = {
      title,
      description,
      serviceType,
      collar,
      status,
    };
    console.log(newSubCategory);
  };


  
  const handleEditImage = () => {
    const newImage = prompt("Enter new image URL");
    if (newImage) {
      setImage(newImage);
    }
  };

  const handleDelete = () => {
        setTitle("");
        setDescription("");
        setStatus("Active");
        setImage("https://via.placeholder.com/300");
        alert("SubCategory Deleted");
      };


  return (
    
<div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col  h-3xl space-y-6">

<h2 className="text-2xl font-bold text-violet">Add Category Details</h2>




  <div className="flex items-start ">
        <img
          src={image|| "https://via.placeholder.com/250x150"}
          alt="Category"
          className="w-64 h-64 object-cover rounded-lg mt-6"
        />
        <button
          onClick={handleEditImage}
          className="ml-0 p-2  bg-transparent border-none cursor-pointer text-gray-600"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4.00023H4C3.46957 4.00023 2.96086 4.21094 2.58579 4.58601C2.21071 4.96109 2 5.46979 2 6.00023V20.0002C2 20.5307 2.21071 21.0394 2.58579 21.4144C2.96086 21.7895 3.46957 22.0002 4 22.0002H18C18.5304 22.0002 19.0391 21.7895 19.4142 21.4144C19.7893 21.0394 20 20.5307 20 20.0002V13.0002M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
              stroke="#1E1E1E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

       {/* Title Input */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200"></label> {/* Reduced margin */}
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray-300 rounded-md text-gray-700 h-8" // Reduced width, height, and padding
        />
      </div>

      {/* Description Input */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200"></label> 
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray-300 rounded-md text-gray-700 h-8" 
        />
      </div>

      {/* Service Type Dropdown */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200"></label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray-300 rounded-md text-gray-400 h-8" 
        >
          <option value="">Select Service Type</option>
          <option value="cleaning">Cleaning</option>
          <option value="plumbing">Plumbing</option>
        </select>
      </div>

      {/* Collar Dropdown */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200 item-center"></label>
        <select
          value={collar}
          onChange={(e) => setCollar(e.target.value)}
          className="w-48 p-1  mx-3 border border-gray-300 rounded-md text-gray-400 h-8" 
        >
          <option value="">Select Collar</option>
          <option value="white">White Collar</option>
          <option value="blue">Blue Collar</option>
        </select>
      </div>

     {/* buttons */}
    
     <div className="flex justify-end items-end mt-4 py-40">
        {/* Status Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="border border-violet-600 text-violet px-3 py-1 rounded-full flex" 
          >
            {status}
            {dropdownOpen ? (
              <FaChevronUp className="ml-1" />
            ) : (
              <FaChevronDown className="ml-1" />
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg">
              <button
                onClick={() => handleStatusChange('active')}
                className="block w-full px-2 py-1 text-left hover:bg-violet-100" 
              >
                Active
              </button>
              <button
                onClick={() => handleStatusChange('inactive')}
                className="block w-full px-2 py-1 text-left hover:bg-violet-100" 
              >
                Inactive
              </button>
              <button
                onClick={() => handleStatusChange('inactive')}
                className="block w-full px-2 py-1 text-left hover:bg-violet-100" 
              >
                Complited
              </button>
              <button
                onClick={() => handleStatusChange('inactive')}
                className="block w-full px-2 py-1 text-left hover:bg-violet-100" 
              >
                canclled
              </button>
            </div>
          )}
        </div>
   

        <button
          onClick={handleDelete}
          className="w-24 bg-red text-white border border-violet-300 text-violet-300 px-3 py-1 rounded-full flex"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className=" w-24   bg-violet text-white border border-violet-300 text-violet-300 px-3 py-1 rounded-full flex"
        >
          Save
        </button>
        </div>
        </div>
        

  );
};

export default NewSubCategory;

