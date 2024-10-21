import React, {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/adminComponents/layoutComponents/sidebar'
import NavBar from '../components/adminComponents/layoutComponents/NavBar'

const AdminLayout = () => {

  const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const location = useLocation()
  return (
    <div className="bg-[#F3F4FF] flex min-h-screen">
        
    <div className="z-10">
        {location.pathname !== '/admin/login' && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
    </div>

    <div className="flex-1 min-h-screen overflow-x-auto">
        {location.pathname !== '/admin/login' && <NavBar toggleSidebar={toggleSidebar} />}
        <Outlet />
    </div>
</div>


  )
}

export default AdminLayout