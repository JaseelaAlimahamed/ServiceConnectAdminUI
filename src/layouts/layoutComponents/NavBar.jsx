import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { FaBars, FaAnglesRight } from 'react-icons/fa6';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/feathers/auth';
import { IoIosArrowRoundBack } from "react-icons/io";

const NavBar = ({ toggleSidebar, role }) => {
  const location = useLocation();
  const [heading, setHeading] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/sign-in');
  };
  useEffect(() => {
    if (location && location.pathname) {
      const pathParts = location.pathname.split('/').filter(Boolean);
      const formattedPath = pathParts.map((part, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <FaAnglesRight className="mx-1 text-sm text- text-gray-500" />}
          {part.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
        </span>
      ));
      setHeading(formattedPath);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 h-16 bg-white shadow-md z-50 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
      <button onClick={() => navigate(-1)} className="me-10 cursor-pointer " aria-label="Go Back">
          <IoIosArrowRoundBack className="text-2xl hover:scale-125" />
        </button>

        <FaBars 
          className="w-6 h-6 text-gray-700 cursor-pointer mr-4 md:hidden" 
          onClick={toggleSidebar} 
          aria-label="Toggle Sidebar" 
        />
        <h1 className="text-gray-900 text-lg font-semibold truncate flex items-center space-x-1">
          {heading} 
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications" className="relative p-2 text-gray-600 hover:text-gray-800">
          <FiBell className="w-5 h-5" />
        </button>
        <button aria-label="Settings" className="relative p-2 text-gray-600 hover:text-gray-800">
          <FiSettings className="w-5 h-5" />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown} 
            className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none" 
            aria-haspopup="true" 
            aria-expanded={dropdownOpen}
          >
            <span className="hidden md:inline text-sm">Nabila A.</span>
            <img src="/userprofilepic.png" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-20 transition ease-out duration-200">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notifications</a>
              <a  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <button onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
