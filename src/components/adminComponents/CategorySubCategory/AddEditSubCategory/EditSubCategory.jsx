import { useState } from "react";
import ImageUpload from "../editSubcategoryItems/ImageUpload";
import TitleInput from "../editSubcategoryItems/TitleInput";
import DescriptionInput from "../editSubcategoryItems/DescriptionInput";
import DropdownInput from "../editSubcategoryItems/DropdownInput";
import ColorDropDownInput from '../editSubcategoryItems/ColorDropDown'
import StatusDropdown from "../editSubcategoryItems/StatusDropdown";
import Buttons from "../editSubcategoryItems/Buttons";

const NewSubCategory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [collar, setCollar] = useState('');
  const [status, setStatus] = useState('Status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image, setImage] = useState(null);

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

  const handleDelete = () => {
    setTitle('');
    setDescription('');
    setServiceType('');
    setCollar('');
    setStatus('Status');
    setImage(null);
    alert("SubCategory Deleted");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg flex flex-col  h-2xl space-y-6">
      <h2 className="text-2xl font-bold text-dark_blue">Add Category Details</h2>

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

        <Buttons handleDelete={handleDelete} handleSave={handleSave} />
      </div>
    </div>
  );
};

export default NewSubCategory;

