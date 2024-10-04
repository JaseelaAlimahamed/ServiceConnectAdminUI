import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import EditSubCategoryIcon from '../../../../assets/icons/EditSubCategory.svg';

const NewSubCategory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [collar, setCollar] = useState('');
  const [status, setStatus] = useState('Status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false);
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
      // setImage(newImage);
    }
  };

  const handleDelete = () => {
    setTitle("");
    setDescription("");
    setStatus("Active");
    alert("SubCategory Deleted");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col space-y-6">
      <h2 className="text-2xl font-bold text-dark_blue">Add Category Details</h2>

      <div className="flex items-start">
        <img
          src={image || "https://via.placeholder.com/250x150"}
          alt="Category"
          className="w-64 h-64 object-cover rounded-lg mt-6"
        />
        <button
          onClick={handleEditImage}
          className="ml-0 p-2 bg-transparent border-none cursor-pointer text-gray"
        >
          <img src={EditSubCategoryIcon} alt="Edit Subcategory" width="24" height="24" />
        </button>
      </div>

      {/* Title Input */}
      <div>
        <label className="block font-semibold mb-1 text-id-gray"></label>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray rounded-md text-secondary h-8 placeholder-id_gray"
        />
      </div>

      {/* Description Input */}
      <div>
        <label className="block font-semibold mb-1 text-id_gray"></label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray rounded-md text-secondary placeholder-id_gray h-8"
       
        />
      </div>

      {/* Service Type Dropdown */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200"></label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray rounded-md text-id_gray h-8"
       
        >
          <option value="" className="text-id_gray">Select Service Type</option>
          <option value="cleaning" className="text-id_gray">Cleaning</option>
          <option value="plumbing" className="text-id_gray">Plumbing</option>
        </select>
      </div>

      {/* Collar Dropdown */}
      <div>
        <label className="block font-semibold mb-1 text-gray-200"></label>
        <select
          value={collar}
          onChange={(e) => setCollar(e.target.value)}
          className="w-48 p-1 mx-3 border border-gray rounded-md text-id_gray h-8"
          // Applied the same text color to the dropdown
        >
          <option value="" className="text-id_gray">Select Collar</option>
          <option value="white" className="text-id_gray">White Collar</option>
          <option value="blue" className="text-id_gray">Blue Collar</option>
          <option value="yellow" className="text-id_gray">Yellow Collar</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-end mt-4 space-x-2">
        {/* Status Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="border border-violet text-violet px-3 py-1 rounded-full flex"
          >
            {status}
            {dropdownOpen ? (
              <FaChevronUp className="ml-1 text-id_gray" />
            ) : (
              <FaChevronDown className="ml-1 text-id_gray" />
            )}
           
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg">
              <button
                onClick={() => handleStatusChange('Active')}
                className="block w-full px-2 py-1 text-left hover:bg-blue_bg"
              >
                Active
              </button>
              <button
                onClick={() => handleStatusChange('Inactive')}
                className="block w-full px-2 py-1 text-left hover:bg-blue_bg"
              >
                Inactive
              </button>
              <button
                onClick={() => handleStatusChange('Completed')}
                className="block w-full px-2 py-1 text-left hover:bg-blue_bg"
              >
                Completed
              </button>
              <button
                onClick={() => handleStatusChange('Cancelled')}
                className="block w-full px-2 py-1 text-left hover:bg-blue_bg"
              >
                Cancelled
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleDelete}
          className="bg-soft_red text-white px-3 py-1 rounded-full"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className="bg-violet text-primary px-3 py-1 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewSubCategory;
