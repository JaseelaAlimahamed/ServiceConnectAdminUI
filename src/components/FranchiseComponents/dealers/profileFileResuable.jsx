import React, { useState } from 'react';

const PhotoUpload = ({ title }) => {
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div
      className={`border-2  border-gray-300 rounded-lg p-0 text-center ${
        dragging ? 'bg-blue-100' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick} // Trigger file input on click
    >
      {/* <label className="block text-sm font-medium text-gray-700 mb-4 mt-2 text-start">
        {title || 'Upload Photo'}
      </label> */}
      <div className="flex items-center justify-center h-48 w-full mb-0 cursor-pointer  bg-gray-300">
      
        {preview ? (
          <img src={preview} alt="Preview" className=" h-full w-full object-cover " />
        ) : (
            <div className="flex flex-col h-full w-full">
                <div className="  bg-gray-100">
                <label className=" block text-sm font-medium text-gray-700 mb-4 mt-2 text-start">{title || 'Upload Photo'}</label>
                </div>
                <div className="mb-5 mt-2 "></div>
                <div className="  bg-gray-300 items-center justify-center">
                <p className="text-gray-500">Drag and drop or click here to select a file</p>
                </div>          
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default PhotoUpload;
