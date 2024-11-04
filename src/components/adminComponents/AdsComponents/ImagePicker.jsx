import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ImagePicker = ({ selectedImage, setSelectedImage }) => {
  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      console.log('Uploaded image', file);
    } else {
      setSelectedImage(null); // Clear the image if no file is selected
    }
  };

  // Handle edit icon click to trigger file input
  const handleEditClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="relative w-[340px] h-[220px] rounded-lg overflow-hidden outline-2 outline-black shadow-md">
      {/* Display uploaded image or placeholder */}
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          <p className="text-gray-500">Add your image</p>
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Edit icon */}
      <button
        type="button"
        onClick={handleEditClick}
        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <FaEdit className="text-gray-600" />
      </button>
    </div>
  );
};

export default ImagePicker;
