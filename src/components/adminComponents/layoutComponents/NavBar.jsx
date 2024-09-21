import { useState, useEffect, useRef } from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";

const NavBar = ({toggleSidebar}) => {
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
    <div className="w-full h-32 font-poppins">
      <nav className="flex items-center justify-between px-4 md:px-8 h-full">
        {/* User Name */}
        <div className='flex items-center'>
        <FaBars className='w-7 h-7 text-gray-700 cursor-pointer mr-2 sm:hidden' onClick={toggleSidebar}/>
        <h1 className="text-dark_blue text-2xl sm:text-3xl lg:text-4xl font-bold">User Management</h1>

        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <div className="relative h-10 w-10 p-2.5 bg-primary rounded-full cursor-pointer  hidden sm:block">
            <FiBell className="w-full h-full text-gray-600 " />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-violet"></span>

          </div>

          {/* Settings Icon */}
          <div className=" h-10 w-10 p-2.5 bg-primary rounded-full cursor-pointer hidden sm:block">
            <FiSettings className="w-full h-full text-gray-600" />
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
                src="/userprofilepic.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 sm:hidden"
                >
                  Notifications
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 sm:hidden"
                >
                  Settings
                </a>
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

export default NavBar;