import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'
import BookingDetailsPage from '../../pages/BookingDetailsPage.jsx'

function RouteAdmin() {


  return (
    <Routes>
      <Route  element={<AdminLayout/>}>
       {/* <Route path='/usermanagement' element={<UserManagement/>}/>
           
      <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/signIn'element={<SignInForm/>}/>  */} 
      <Route path='profile' element={<AdminProfilePage/>}/>
      <Route path='bookingdetails' element={<BookingDetailsPage/>}/>
      

      
      </Route>
    </Routes>

  )
}

export default RouteAdmin