import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const { id: CategoryId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("https://via.placeholder.com/300");

  // Fetch category details if we are editing
  useEffect(() => {
    if (CategoryId) {
      // Fetch the category data by ID
      // This is a placeholder for the actual fetch call
      // Assuming fetchCategoryDetails is a function that fetches category data
      fetchCategoryDetails(CategoryId);
    }
  }, [CategoryId]);

  // Function to fetch category details by ID
  const fetchCategoryDetails = async (id) => {
    try {
      // Fetch data from backend (replace with actual API call)
      const response = await fetch(`/api/categories/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.status);
      setImage(data.image || "https://via.placeholder.com/300");
    } catch (error) {
      console.error("Failed to fetch category details:", error);
    }
  };

  // Function to save or update the category
  const handleSave = () => {
    const categoryData = { title, description, status, image };

    if (CategoryId) {
      console.log("Updating Category:", categoryData);
      // API call to update existing category
      // Example: await fetch(`/api/categories/${CategoryId}`, { method: "PUT", body: JSON.stringify(categoryData) })
    } else {
      console.log("Creating New Category:", categoryData);
      // API call to create a new category
      // Example: await fetch("/api/categories", { method: "POST", body: JSON.stringify(categoryData) })
    }

    navigate("/admin/categories");
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
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col h-full space-y-6">
      <h2 className="text-2xl font-bold text-violet">
        {CategoryId ? "Edit Category Details" : "Add Category Details"}
      </h2>

      <div className="flex items-start">
        <img
          src={image}
          alt="Category"
          className="w-64 h-64 object-cover rounded-lg mt-6"
        />
        <button
          onClick={handleEditImage}
          className="ml-0 p-2 bg-transparent border-none cursor-pointer text-gray-600"
        >
          {/* Icon SVG for editing */}
        </button>
      </div>

      <div className="h-full space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-medium p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
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
          <option value="Active">Status: Active</option>
          <option value="Completed">Status: Completed</option>
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
          {CategoryId ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
