import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryListGet } from "../../../../service/api/admin/GetApi";
import { editCategory } from "../../../../service/api/admin/PatchApi";
import { categorydelete } from "../../../../service/api/admin/DeleteApi";
import editIcon from '../../../../assets/icons/EditSubCategory.svg'
import DeleteModal from '../CategoryComponents/DeleteModal'

const EditCategory = () => {
  const navigate = useNavigate();
  const { id: CategoryId } = useParams();

  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [newImage, setNewImage] = useState(null);
  const [image, setImage] = useState( '')
  const [error,setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch category  
  useEffect(() => {
    if (CategoryId) {
      fetchCategoryDetails(CategoryId);
    }
  }, [CategoryId]);

  // Function to fetch category details by ID
  const fetchCategoryDetails = async (CategoryId) => {
    const id=Number(CategoryId)
    try {
      const response = await categoryListGet()
      const data=response.categories
      const category =  data.find(category => category.id === id)

      setTitle(category.title);
      setDescription(category.description);
      setStatus(category.status);
      setImage(category.image);

    } catch (error) {
      console.error("Failed to fetch category details:", error);
      alert("err lodaing")
    }
  };

  const handleFileChange = (event) => {
    setNewImage(event.target.files[0]); // Store the selected file
  };

  // Function to save or update the category
  const handleSave = async () => {
    try{
      setIsUpdateDisabled(true);

      const formData=new FormData()

      // Append fields to FormData
      formData.append("id", CategoryId);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("status", status);

      if (newImage instanceof File) {
        formData.append("image", newImage); 
      }
      await editCategory(formData);
      navigate("/categories")
      
    } catch (error){
      for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
          setError(`${key}: ${error[key]}`);
          console.error(`${key}:`, error[key]);
        }
      }
    } finally {
      // setTimeout(() => setIsUpdateDisabled(false), 2000);
      setIsUpdateDisabled(false); // Re-enable the button after the operation
    }
  };

  const handleDelete = async() => {
    try{
      setIsDeleteDisabled(true);
      const response=await categorydelete(CategoryId);
      navigate("/categories");
    }catch(error){
      console.log(error)
      alert("err deleting")
    } finally {
      setIsDeleteDisabled(false); // Re-enable the button after the operation
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col h-2xl space-y-6">
      <h2 className="text-2xl font-bold text-violet">
         Edit Category Details
      </h2>
      <div className="flex items-start">
        {newImage ? (
          <img
            src={URL.createObjectURL(newImage)} // Show the new image preview
            alt="New Preview"
            className="w-64 h-64 object-cover rounded-lg mt-6"
          />
        ) : (
          image && (
            <img
              src={`${import.meta.env.VITE_API_URL}${image}`} // Show the existing image
              alt="Category"
              className="w-64 h-64 object-cover rounded-lg mt-6"
            />
          )
        )} 
        {(newImage || image) ? (
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
             disabled={isDeleteDisabled}
            onClick={()=>setIsModalOpen(true)}
            className="bg-red text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 hover:bg-red-600"
          >
            {isDeleteDisabled ? "Processing..." : "Delete"}
          </button>
          <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleDelete(CategoryId)}
        />
        <button
          disabled={isUpdateDisabled}
          onClick={handleSave}
          className="bg-purple text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 hover:bg-purple-800"
        >
          {isUpdateDisabled ? "Processing..." : "Update"}
        </button>
        <button
            onClick={()=>navigate("/categories")}
            className="px-6 py-3 bg-custom_gray text-primary font-medium rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            Cancel
          </button>
      </div>
      <div className="text-red flex justify-center items-center ">
        {error}
      </div>
    </div>
  );
};

export default EditCategory;
