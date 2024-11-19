import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addCategory} from "../../../../service/api/admin/PostApi"
import editIcon from '../../../../assets/icons/EditSubCategory.svg'

const AddCategory = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [newImage, setNewImage] = useState(null);

  

  const handleFileChange = (event) => {
    setNewImage(event.target.files[0]); // Store the selected file
  };

  // Function to save or update the category
  const handleSave = async () => {
    try{
      const formData=new FormData()

      // Append fields to FormData
      formData.append("title", title);
      formData.append("description", description);
      formData.append("status", status);

      if (newImage instanceof File) {
        formData.append("image", newImage); 
      }

      await addCategory(formData)

      navigate("/categories");

    } catch (error){
      console.log(error)
      alert("field is blank")
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col h-2xl space-y-6">
      <h2 className="text-2xl font-bold text-violet">
        Add Category Details
      </h2>
      <div className="flex items-start">
        {newImage && (
          <img
            src={URL.createObjectURL(newImage)} // Show the new image preview
            alt="New Preview"
            className="w-64 h-64 object-cover rounded-lg mt-6"
          />
        ) } 
        {newImage  ? (
          <label className="ml-2 p-2 bg-transparent border-none cursor-pointer text-gray flex items-center space-x-2">
            <img src={editIcon} alt="Edit Icon" className="w-6 h-6" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ):(
          <label className="text-gray-700 font-semibold">
            Image:
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-3 border border-gray rounded-lg"
            />
          </label>
        )}
      </div>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-48 p-1 mx-3 border border-id_gray rounded-md text-secondary h-8 placeholder-id_gray"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-48 p-1 mx-3 border border-id_gray rounded-md text-secondary h-8 placeholder-id_gray"
      />

      <div className="flex justify-end items-end mt-4 py-20 p-4 space-x-2">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-medium sm:w-auto p-3 border border-purple rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-purple text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 hover:bg-purple-800"
        >
          Save
        </button>
        <button
            onClick={()=>navigate("/categories")}
            className="px-6 py-3 bg-custom_gray text-primary font-medium rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            Cancel
          </button>
      </div>
    </div>
  );
};

export default AddCategory;
