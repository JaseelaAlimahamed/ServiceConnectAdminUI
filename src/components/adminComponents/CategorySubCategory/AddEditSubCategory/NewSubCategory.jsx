import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams,useNavigate } from "react-router-dom";

import ImageUpload from "../editSubcategoryItems/ImageUpload";
import TitleInput from "../editSubcategoryItems/TitleInput";
import DescriptionInput from "../editSubcategoryItems/DescriptionInput";
import DropdownInput from "../editSubcategoryItems/DropdownInput";
import ColorDropDownInput from '../editSubcategoryItems/ColorDropDown';
import StatusDropdown from "../editSubcategoryItems/StatusDropdown";
import Buttons from "../editSubcategoryItems/Buttons";
import { SubCategoryGetById } from "../../../../service/api/admin/GetApi";
import { SubcategoryEdit } from "../../../../service/api/admin/PutApi";
import { SubcategoryPost } from "../../../../service/api/admin/PostApi";
import { SubcategoryDelete } from "../../../../service/api/admin/DeleteApi";

const AddEditSubCategory = () => {
  
  const { id: subCategoryId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [collar, setCollar] = useState('');
  const [status, setStatus] = useState('Status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [error,setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

  
  // Load existing sub-category data if subCategoryId exists
  useEffect(() => {
    if (subCategoryId) {
    
      const fetchSubCategory = async () => {
       
        try {
          const data = await SubCategoryGetById(subCategoryId); // Wait for the promise to resolve
          
          setTitle(data.title);
          setDescription(data.description);
          setServiceType(data.service_type);
          setCollar(data.collar);
          setStatus(data.status);
          setImage(data.image);
      } catch (error) {
          console.error('Error fetching categories:', error);
      }
       
      };

      fetchSubCategory();
    }
  }, [subCategoryId]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false);
  };
  
  const handleEditImage = (event) => {
    console.log("image")
    setImage(event.target.files[0]); // Store the selected file
    
  };
  // demo value
const category=1
const collarid=1
const service_type=2

const subCategoryData = async () => {
  const formData = new FormData();

  // Append fields to FormData
  formData.append("title", title);
  formData.append("description", description);
  formData.append("status", status);
  formData.append("service_type", serviceType);
  formData.append("collar", collar);
  formData.append("category", category);

  if (image instanceof File) {
    formData.append("image", image);
  }

  return formData;
};

  const handleSave = async () => {
    setIsSaveDisabled(true)
    try{ 
    const formData = new FormData();

    // Append fields to FormData
    formData.append("title", title);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("service_type", service_type);
    formData.append("collar", collarid);
    formData.append("category", category);
  
    if (image instanceof File) {
      formData.append("image", image);
    }
   
        await SubcategoryPost(formData)
        navigate('/sub-categories');
       
      }catch(error){
        
        for (const key in error) {
          if (Object.prototype.hasOwnProperty.call(error, key)) {
            
            setError(`${key}: ${error[key]}`);
            console.error(`${key}:`, error[key]);
          }
         
        }
        
      }finally{
        setIsSaveDisabled(false)
      }
    
  };

  const handleEdit = async () => {
    try {
      const formData = await subCategoryData();
        await SubcategoryEdit(subCategoryId, formData);
        navigate('/sub-categories'); 
    } catch (error) {
      for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
          setError(`${key}: ${error[key]}`);
          console.error(`${key}:`, error[key]);
        }
      }
    }
  };

  const handleDelete = (subCategoryId) => {
    try{
      setIsModalOpen(false)
    SubcategoryDelete(subCategoryId)
    navigate('/sub-categories'); 
    }
    catch(err){
      console.error("Error delete sub-category:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col h-2xl space-y-6">
      <h2 className="text-2xl font-bold text-dark_blue">
        {subCategoryId ? "Edit Sub Category Details" : "Add Sub Category Details"}
      </h2>

      <ImageUpload image={image} onEditImage={handleEditImage} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} />

      <DropdownInput
        label=""
        value={serviceType}
        onChange={setServiceType}
        options={['Cleaning', 'Plumbing', 'Electrical']}
      />

      <ColorDropDownInput
        value={collar}
        onChange={setCollar}
        options={['White Collar', 'Blue Collar', 'Yellow Collar']}
      />

      <div className="flex justify-end items-end mt-4 py-20 p-4 space-x-2">
        <StatusDropdown
          status={status}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleStatusChange={handleStatusChange}
        />

        <Buttons 
        handleDelete={handleDelete} 
        handleSave={handleSave} 
        handleEdit={handleEdit} 
        isSaveDisabled={isSaveDisabled}
        id={subCategoryId}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        />
      </div>
      <div className="text-red flex justify-center items-center">
        {error}
      </div>
    </div>
  );
};

export default AddEditSubCategory;
