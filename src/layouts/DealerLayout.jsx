import React, {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/adminComponents/layoutComponents/NavBar';
import Sidebar from '../components/dealerComponents/layoutComponents/SideBar';


const DealerLayout = () => {
    const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
      const location = useLocation()
    return (
      <div className="bg-[#F3F4FF] flex min-h-screen">
          
      <div className="sticky h-screen z-10">
         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
  
      <div className="flex-1 min-h-screen overflow-auto">
          <NavBar toggleSidebar={toggleSidebar} />
          <Outlet />
      </div>
  </div>
    );
}

export default DealerLayout;
