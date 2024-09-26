import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import UserDetails from '../../pages/adminPages/UserDetails'
import SignInForm from '../../components/adminComponents/AdminSignIn'
import ServiceType from '../../pages/adminPages/ServiceType'
function RouteAdmin() {


  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path='usermanagement' element={<UserManagement/>}/>
           
      <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/signIn'element={<SignInForm/>}/>
      <Route path='/servicetype'element={<ServiceType/>}/>

      </Route>
    </Routes>

  )
}

export default RouteAdmin