import { useState, useEffect, useRef } from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';

const DashboardNavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full h-16 bg-gray-50 shadow-md">
      <nav className="flex items-center justify-between px-4 md:px-8 h-full">
        
        {/* User Name */}
        <div className="text-gray-700 font-medium text-lg">
          User Management
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <FiBell className="w-6 h-6 text-gray-600" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
          </div>

          {/* Settings Icon */}
          <div className="cursor-pointer">
            <FiSettings className="w-6 h-6 text-gray-600" />
          </div>

          {/* Profile Button with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center cursor-pointer space-x-2"
              onClick={toggleDropdown}
            >
              <div className="hidden md:block text-gray-600 text-sm">
                Nabila A.
                <div className="text-xs text-gray-400">Admin</div>
              </div>
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavBar;
