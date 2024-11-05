// ImageUploadComponent.jsx
import React from "react";

function ImageUploadComponent() {
  return (
    <div className="flex justify-center items-center bg-gray w-40 h-40 rounded-lg mb-4">
      <input type="file" accept="image/*" className="hidden" id="imageUpload" />
      <label
        htmlFor="imageUpload"
        className="w-full h-full flex flex-col justify-center items-center border-gray-400 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <span className="text-sm text-center">Drag & Drop or Click to Upload</span>
      </label>
    </div>
  );
}

export default ImageUploadComponent;
