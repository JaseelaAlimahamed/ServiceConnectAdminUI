import React, { useState } from 'react';

const AdsCategories = ({setCategory}) => {
  const categories = ['Banner Ad', 'Card Ad', 'Popup Ad', 'Boost Profile'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); 
    setCategory(category)
    console.log('User selected category:', category);
  };

  return (
    <div className="w-full max-w-md md:w-64 h-full p-4 sm:p-6 md:p-7 bg-white shadow-md rounded-xl">
       <h3 className='text-3xl text-dark_blue font-bold mb-5'>Ads-Category</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`p-3 rounded-full flex justify-center mb-2 
            ${selectedCategory === category ? 'bg-lite_blue2' : 'bg-blue_bg'} 
            hover:bg-lite_blue2 transition-all duration-200 cursor-pointer`}
            onClick={() => handleCategorySelect(category)} 
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdsCategories;