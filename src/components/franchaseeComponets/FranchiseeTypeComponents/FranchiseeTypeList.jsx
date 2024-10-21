import Editicon from '../../../assets/icons/EditSubCategory.svg';

const FranchiseeTypeList = ({ franchiseeTypes, handleDelete, handleAddItem }) => {
  return (
    <div className="w-full  md:w-1/4 bg-primary rounded-lg shadow-lg p-4 mb-4 mr-8 md:mb-0">
      {/* Type Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-dark_blue">Type</h2>
        <img src={Editicon} alt="Edit Icon" className="cursor-pointer" />
      </div>

      {/* Franchisee Type List */}
      <ul className="space-y-4">
        {franchiseeTypes.map((type, index) => (
          <li
            key={index}
            className="bg-gray text-secondary text-center p-2 rounded-lg cursor-pointer hover:bg-blue_gray w-half flex justify-center items-center"
          >
            {type}
            <button
              onClick={() => handleDelete(type)}
              className="text-red font-semibold"
            >
              
            </button>
          </li>
        ))}
      </ul>

      {/* Add Item Button */}
      <button
        onClick={handleAddItem}
        className="bg-gray text-secondary p-2 w-full mt-4 rounded-lg hover:bg-blue_gray"
      >
        + Add New
      </button>
    </div>
  );
};

export default FranchiseeTypeList;
