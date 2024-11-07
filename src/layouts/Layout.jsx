import React, {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './layoutComponents/sidebar'
import NavBar from './layoutComponents/NavBar'
import { useSelector } from 'react-redux'

const  Layout = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const role = useSelector(state => state.auth.role)
  console.log(role);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const location = useLocation()
  return (
    <div className="bg-[#F3F4FF] flex min-h-screen">

    <div className="z-10">
        {location.pathname !== '/admin/login' && <Sidebar role={role} isOpen={isOpen} toggleSidebar={toggleSidebar} />}
    </div>

    <div className="flex-1 min-h-screen overflow-x-auto ">
        {location.pathname !== '/admin/login' && <NavBar role={role} toggleSidebar={toggleSidebar} />}
        <Outlet />
    </div>
</div>


  )
}

export default Layout