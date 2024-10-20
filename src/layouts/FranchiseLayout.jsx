import React, {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/FranchiseComponents/layoutComponents/Sidebar'
import NavBar from '../components/franchiseComponents/layoutComponents/Navbar'

const FranchiseLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen)

    const location = useLocation()
  return (
    <div className="bg-[#F3F4FF] flex min-h-screen">
        
    <div className="sticky h-full z-10 flex flex-col">
        {location.pathname !== '/franchise/login' && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
   
    </div>

    <div className="flex-1 min-h-screen overflow-auto">
        {location.pathname !== '/franchise/login' && <NavBar toggleSidebar={toggleSidebar} />}
        <div className='h-[calc(100vh-80px)] overflow-y-auto'>

        <Outlet />

        </div>
    </div>
</div>


  )
}

export default FranchiseLayout