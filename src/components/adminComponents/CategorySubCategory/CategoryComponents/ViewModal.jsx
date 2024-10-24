import React from 'react';

const ViewModal = ({ isOpen, onClose, category }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-blue_bg rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover mb-4"
                />
                <p className='text-violet font-bold'>Category ID: {category.id}</p>
                <p className='text-lg font-semibold  mt-2'>{category.description}</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-sky_blue text-white rounded">Close</button>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
