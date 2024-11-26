import editIcon from '../../../../assets/icons/EditSubCategory.svg';

const ImageSection = ({ image, onEditImage }) => {
  // Determine image source
  const imageSrc = 
    image instanceof File 
      ? URL.createObjectURL(image) // For newly uploaded files
      : image || "https://via.placeholder.com/250x150"; // For existing URLs or placeholder

  return (
    <div className="flex items-start">
      <img
        src={imageSrc}
        alt="Category"
        className="w-64 h-64 object-cover rounded-lg mt-6"
      />
      <label className="ml-2 p-2 bg-transparent border-none cursor-pointer text-gray flex items-center space-x-2">
        <img src={editIcon} alt="Edit Icon" className="w-6 h-6" />
        <input
          type="file"
          accept="image/*"
          onChange={onEditImage}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageSection;
