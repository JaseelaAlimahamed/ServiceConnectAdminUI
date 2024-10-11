import React, {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/FranchiseComponents/layoutComponents/Sidebar'
import NavBar from '../components/FranchiseComponents/layoutComponents/Navbar'

const FranchiseLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const location = useLocation()
  return (
    <div className="bg-[#F3F4FF] flex min-h-screen">
        
    <div className="sticky h-full z-10">
        {location.pathname !== '/franchise/login' && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
    </div>

    <div className="flex-1 min-h-screen overflow-auto">
        {location.pathname !== '/franchise/login' && <NavBar toggleSidebar={toggleSidebar} />}
        <Outlet />
    </div>
</div>


  )
}

export default FranchiseLayout