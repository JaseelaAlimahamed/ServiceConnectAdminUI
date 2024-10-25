import  { useState } from 'react';

const FranchaseeCategory = () => {
  const [franchiseeTypes, setFranchiseeTypes] = useState(['Grama panchayat', 'Municipality', 'Cooperation']);
  const [formData, setFormData] = useState({
    details: '',
    rate: '',
    currency: '',
  });

  const handleDelete = (type) => {
    setFranchiseeTypes(franchiseeTypes.filter((t) => t !== type));
  };

  const handleSave = () => {
    console.log('Saved:', formData);
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
  };

  const handleAddItem = () => {

    console.log('Add item button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screnn h-full  p-4 ">
      {/* Type Section */}
      <div className="w-full md:w-1/4 h-auto bg-primary rounded-lg shadow-lg  mr-0 md:mr-4  md:mb-0">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold   text-dark_blue mt-3 ml-2">Type</h2>
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
        </div> 
        {/* type */}
        <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center w-full  space-y-5">
          {franchiseeTypes.map((type, index) => (
            <li
              key={index}
              className="bg-gray text-secondary text-center p-2  mb- rounded-lg cursor-pointer hover:bg-blue_gray w-3/4  flex justify-center "
            >
              {type}
              <button
                onClick={() => handleDelete(type)}
                className="text-red ml-2"
              >

              </button>
            </li>
          ))}
        </ul> 

   {/* Add Item Button */}
  <button
    onClick={handleAddItem}
    className="bg-gray text-secondary p-2 w-3/4 h-9 mb-2 rounded-lg hover:bg-blue_gray mt-5"
  >
    + Add Item
  </button>
</div>


 
</div> 

{/* Form Section */}
 <div className="flex-1 bg-primary rounded-lg shadow-lg p-8 relative max-w-full h-[300px] overflow-auto mt-2">
  <h2 className="text-xl font-semibold mb-1 text-secondary">Franchisee Type</h2>
  <div className="space-y-4">
    {['Grama panchayat', 'Details', 'Rate', 'Currency'].map((label, index) => (
      <div key={index} className="flex justify-center text-secondary">
        <input
          type="text"
          placeholder={label}
          className="w-full md:w-64 h-9 bg-gray  text-center justify-center placeholder-secondary"
          
        />

      </div>
    ))}
  </div>
</div> 

      {/* Buttons */}
      <div className="flex   md:flex-row   flex-col  md:absolute  md:mt-0 justify-end bottom-0 right-0 mr-2 p-4 space-y-2 md:space-y-0 md:jusfity-end ">
        <button
          onClick={handleDelete}
          className="w-full md:w-24 h-10 border bg-red text-primary px-3 py-1 rounded-full flex justify-center items-center"
        >
          Delete
        </button>

        <button
          onClick={handleSaveDraft}
          className="w-full md:w-36 h-10 border border-violet text-violet px-3 py-1 rounded-full flex justify-center items-center"
        >
          Save as Draft
        </button>

        <button
          onClick={handleSave}
          className="w-full md:w-24 h-10 bg-violet text-primary px-3 py-1 rounded-full flex justify-center items-center"
        >
          Save
        </button>
      </div>
    </div>
    
  );
};

export default FranchaseeCategory;   
