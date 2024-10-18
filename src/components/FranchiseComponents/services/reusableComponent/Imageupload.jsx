import React, { useState } from 'react';

const Imageupload = ({ showTerms = true, title = "Add image and video",IconComponent }) => {
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages((prevImages) => [...prevImages, ...files]);

        files.forEach((file) => {
            console.log('Selected file:', file);
        });
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4">
            {/* Title */}
           {/* Title */}
           <h3 className="text-lg font-medium mb-2 ">{title}</h3>

            {/* Image and Video Uploader */}
            <div className="flex items-center space-x-4">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index}`}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                        <button
                            className="absolute top-0 right-0 bg-dark-gray text-white rounded-full p-1 text-xs"
                            onClick={() => handleRemoveImage(index)}
                        >
                            x
                        </button>
                    </div>
                ))}

                <label className="cursor-pointer">
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleImageUpload}
                    />
                    <div className='flex justify-around'>
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
                        {IconComponent ? <IconComponent className="text-4xl shadow-xl"/>:"+"}
                    </div>
                    <div>
                    <span className="text-4xl font-bold">+</span>
                    </div>
                    </div>
                </label>
            </div>

            {/* Conditionally render Terms & Conditions */}
            {showTerms && (
                <div className="mt-4">
                    <label className="flex items-center justify-between text-md text-dark-gray font-bold">
                        <span>Terms & Conditions</span>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-2xl" />
                            <span>Accept</span>
                        </div>
                    </label>
                </div>
            )}
        </div>
    );
};

export default Imageupload;
