import React, { useState } from 'react';

const ButtonGroup = ({ status, setStatus, handleSubmit }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (value) => {
    setStatus(value);
    setDropdownOpen(false);
  };

  return (
    <div className="flex space-x-4 mb-10">
      {/* Status Dropdown Button */}
      <div className="relative">
        <button
          className="border-2 border-violet text-violet px-4 py-2 rounded-full flex items-center justify-between"
          type="button"
          onClick={toggleDropdown}
        >
          {status} <span className="ml-2">▼</span>
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-light_gray rounded shadow-md z-10">
            <button
              onClick={() => handleSelect('Active')}
              className="block w-full px-4 py-2 text-left hover:bg-light_gray"
            >
              Active
            </button>
            <button
              onClick={() => handleSelect('Inactive')}
              className="block w-full px-4 py-2 text-left hover:bg-light_gray"
            >
              Inactive
            </button>
          </div>
        )}
      </div>

      {/* Delete Button */}
      <button type="button" className="bg-soft_red text-white px-8 py-2 rounded-full">
        Delete
      </button>

      {/* Save Button */}
      <button type="submit" className="bg-violet text-white px-8 py-2 rounded-full" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default ButtonGroup;
