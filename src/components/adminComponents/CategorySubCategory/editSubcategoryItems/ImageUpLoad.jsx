
import editIcon from '../../../../assets/icons/EditSubCategory.svg'

const ImageSection = ({ image,onEditImage }) => {
  return (
    <div className="flex items-start">
      <img
        src={image || "https://via.placeholder.com/250x150"}
        alt="Category"
        className="w-64 h-64 object-cover rounded-lg mt-6"
      />
      <button
        onClick={onEditImage}
        className="ml-2 p-2 bg-transparent border-none cursor-pointer text-gray"
      >
        {/* Edit Icon as SVG */}
        <img src={editIcon} alt="Edit Icon" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSection;
