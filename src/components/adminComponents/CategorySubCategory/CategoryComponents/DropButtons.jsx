import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const DropButtons = ({ categories, onCategorySelect }) => {
    // State for managing dropdown visibility
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category

    // Handle select category
    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Set the selected category
        onCategorySelect(category); // Pass the selected category to the parent
        setMainDropdownOpen(false); // Close the dropdown after selection
    };

    // Toggle functions for dropdowns
    const toggleSortDropdown = () => {
        setSortDropdownOpen(!sortDropdownOpen);
        setMainDropdownOpen(false);
    };

    const toggleMainDropdown = () => {
        setMainDropdownOpen(!mainDropdownOpen);
        setSortDropdownOpen(false);
    };

    return (
        <div className="flex gap-4 relative">
            {/* Sort Button */}
            <div className="relative">
                <button
                    className="btn px-4 py-2 text-violet outline outline-violet rounded-full 
                    sm:px-6 sm:py-3  
                    md:px-8 md:py-2"
                    onClick={toggleSortDropdown}
                >
                    <span className='flex items-center font-semibold gap-2 sm:gap-3'>
                        Sort <IoMdArrowDropdown style={{ fontSize: '24px' }} />
                    </span>
                </button>
                {sortDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue_bg shadow-lg rounded-md z-10">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sort by Name</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sort by Date</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sort by Price</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Main Button */}
            <div className="relative">
                <button
                    className="btn px-4 py-2 text-white bg-violet rounded-full 
                    sm:px-6 sm:py-3  
                    md:px-8 md:py-2"
                    onClick={toggleMainDropdown}
                >
                    <span className='flex items-center font-semibold gap-3 sm:gap-3'>
                        {selectedCategory ? selectedCategory.name : 'Select Category'} {/* Display selected category or prompt */}
                        <IoMdArrowDropdown style={{ fontSize: '24px' }} />
                    </span>
                </button>
                {mainDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue_bg shadow-lg rounded-md z-10">
                        <ul>
                            {/* Render categories dynamically */}
                            {categories.map((category) => (
                                <li
                                    key={category.id}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropButtons;
