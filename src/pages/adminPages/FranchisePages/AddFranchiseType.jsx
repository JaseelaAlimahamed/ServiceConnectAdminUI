
// import { useState } from 'react';
// import FranchiseeTypeList from '../../../components/franchaseeComponets/FranchiseeTypeComponents/FranchiseeTypeList';
// import FranchiseeForm from '../../../components/franchaseeComponets/FranchiseeTypeComponents/FranchiseeForm';
// import ActionButtons from '../../../components/franchaseeComponets/FranchiseeTypeComponents/ActionButtons';

// const FranchiseeType = () => {
//   const [franchiseeTypes, setFranchiseeTypes] = useState(['Grama Panchayat', 'Municipality', 'Cooperation']);
//   const [formData, setFormData] = useState({
//     details: '',
//     rate: '',
//     currency: '',
//   });

//   // Function to handle deleting a franchisee type
//   const handleDelete = (type) => {
//     setFranchiseeTypes(franchiseeTypes.filter((t) => t !== type));
//   };

//   // Function to handle input changes in the form
//   const handleInputChange = (e, field) => {
//     setFormData({ ...formData, [field]: e.target.value });
//   };

//   // Save function - clears form after save
//   const handleSave = () => {
//     console.log('Saved:', formData);
//     setFormData({ details: '', rate: '', currency: '' }); 
//   };

//   // Save draft function - clears form after saving as draft
//   const handleSaveDraft = () => {
//     console.log('Draft saved:', formData);
//     setFormData({ details: '', rate: '', currency: '' }); 
//   };

//   // Add a new franchisee type to the list
//   const handleAddItem = () => {
//     const newType = prompt('Enter new franchisee type:');
//     if (newType && !franchiseeTypes.includes(newType)) {
//       setFranchiseeTypes([...franchiseeTypes, newType]);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-gary w-screen min-h-screen h-full p-4">
//       {/* Franchisee Type List Section */}
//       <FranchiseeTypeList
//         franchiseeTypes={franchiseeTypes}
//         handleDelete={handleDelete}
//         handleAddItem={handleAddItem}
//       />

//       {/* Franchisee Form Section */}
//       <FranchiseeForm formData={formData} handleInputChange={handleInputChange} />

//       {/* Action Buttons */}
//       <ActionButtons
//         handleDelete={handleDelete}
//         handleSaveDraft={handleSaveDraft}
//         handleSave={handleSave}
//       />
//     </div>
//   );
// };

// export default FranchiseeType;







import { useState } from 'react';
import FranchiseeTypeList from '../../../components/franchaseeComponets/FranchiseeTypeComponents/FranchiseeTypeList';
import FranchiseeForm from '../../../components/franchaseeComponets/FranchiseeTypeComponents/FranchiseeForm';
import ActionButtons from '../../../components/franchaseeComponets/FranchiseeTypeComponents/ActionButtons';

const FranchiseeType = () => {
  const [franchiseeTypes, setFranchiseeTypes] = useState(['Grama Panchayat', 'Municipality', 'Cooperation']);
  const [formData, setFormData] = useState({
    details: '',
    rate: '',
    currency: '',
  });

  // Function to handle deleting a franchisee type from the list
  const handleDeleteType = (type) => {
    setFranchiseeTypes(franchiseeTypes.filter((t) => t !== type));
  };

  // Function to handle input changes in the form
  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Save function - clears form after save
  const handleSave = () => {
    console.log('Saved:', formData);
    setFormData({ details: '', rate: '', currency: '' });
  };

  // Save draft function - clears form after saving as draft
  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
    setFormData({ details: '', rate: '', currency: '' });
  };

  // Add a new franchisee type to the list
  const handleAddItem = () => {
    const newType = prompt('Enter new franchisee type:');
    if (newType && !franchiseeTypes.includes(newType)) {
      setFranchiseeTypes([...franchiseeTypes, newType]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 w-screen min-h-screen h-full p-4">
      {/* Franchisee Type List Section */}
      <FranchiseeTypeList
        franchiseeTypes={franchiseeTypes}
        handleDelete={handleDeleteType}  // Renamed for clarity
        handleAddItem={handleAddItem}
      />

      {/* Franchisee Form Section */}
      <FranchiseeForm formData={formData} handleInputChange={handleInputChange} />

      {/* Action Buttons */}
      <div className="md:flex md:justify-end w-full">
        <ActionButtons
          handleSaveDraft={handleSaveDraft}
          handleSave={handleSave}
          handleDelete={() => console.log('Form deleted')} // Replace with actual form delete logic
        />
      </div>
    </div>
  );
};

export default FranchiseeType;
