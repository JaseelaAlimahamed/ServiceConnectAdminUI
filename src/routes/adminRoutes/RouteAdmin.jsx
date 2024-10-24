


import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagementPage from '../../pages/adminPages/managementPages/UserManagementPage.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'







function RouteAdmin() {



  return (
    <Routes>


      <Route path='/sign-in' element={<SignInForm />} />
      

      <Route element={<AdminLayout />}>

      
        <Route path='/user-management' element={<UserManagementPage />} />
       

        <Route path='/user-details' element={<UserDetails />} />

      </Route>
    </Routes>

  )
}

export default RouteAdmin