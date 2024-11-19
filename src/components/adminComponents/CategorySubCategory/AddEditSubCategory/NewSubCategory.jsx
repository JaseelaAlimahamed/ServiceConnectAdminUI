import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useParams } from "react-router-dom";

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
const AddEditSubCategory = () => {
  
  const { id: subCategoryId } = useParams();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [collar, setCollar] = useState('');
  const [status, setStatus] = useState('Status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image, setImage] = useState(null);

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

  const handleEditImage = () => {
    const newImage = prompt("Enter new image URL");
    if (newImage) {
      setImage(newImage);
    }
  };
const category=1
  const subCategoryData = {
    title,
    description,
    serviceType,
    collar,
    status,
    image,
    category
  };

  const handleSave = () => {
   
      console.log("New SubCategory:", subCategoryData);
      SubcategoryPost(subCategoryData)
      navigator('/sub-categories')
    
  };

  const handleEdit =()=>{
    
    SubcategoryEdit(subCategoryId,subCategoryData)
    console.log("Edit SubCategory:", subCategoryData);
    // navigator('/sub-categories')
  }

  const handleDelete = () => {
   
    alert("SubCategory Deleted");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col h-2xl space-y-6">
      <h2 className="text-2xl font-bold text-dark_blue">
        {subCategoryId ? "Edit Sub Category Details" : "Add Sub Category Details"}
      </h2>

      <ImageUpload image={image} handleEditImage={handleEditImage} />
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

        <Buttons handleDelete={handleDelete} handleSave={handleSave} handleEdit={handleEdit} id={subCategoryId}/>
      </div>
    </div>
  );
};

export default AddEditSubCategory;
