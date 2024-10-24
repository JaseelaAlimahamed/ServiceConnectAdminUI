import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="flex items-center border border-violet rounded-full overflow-hidden px-6">
            <button type="submit" className="bg-white text-medium_dark_gray p-4">
                <FaSearch />
            </button>
            <input
                type="text"
                placeholder="Search Categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
                className="flex-grow outline-none px-4 py-2 rounded-full placeholder-violet"
            />
        </div>
    );
};

export default SearchBar;



