import React, { useState } from "react";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("https://via.placeholder.com/300");

  const handleSave = () => {
    console.log(`Category Saved with  Imagepath:${image} ,Title:${title}, Description: ${description}, Status: ${status}`);
  };

  const handleDelete = () => {
    setTitle("");
    setDescription("");
    setStatus("Active");
    setImage("https://via.placeholder.com/300");
    alert("Category Deleted");
  };

  const handleEditImage = () => {
    const newImage = prompt("Enter new image URL");
    if (newImage) {
      setImage(newImage);
    }
  };

  return (

    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col  h-full space-y-6">

      <h2 className="text-2xl font-bold text-violet">Add Category Details</h2>


      <div className="flex items-start ">
        <img
          src={image}
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
      
       <div className="h-full space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-medium p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 "
        /><br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-medium p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>



      <div className="flex space-x-4 justify-end items-center">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-medium sm:w-auto p-3 border border-purple rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="Active">Status</option>
          <option value="completed">Status: Completed</option>
          <option value="Incomplete">Status: Incomplete</option>
          <option value="Cancelled">Status: Cancelled</option>
        </select>

        <button
          onClick={handleDelete}
          className="bg-red text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className="bg-purple text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 hover:bg-purple-800"
        >
          Save
        </button>
      </div>

    </div>
  );
};

export default AddCategory;