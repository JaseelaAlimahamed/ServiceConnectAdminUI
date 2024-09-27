 import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'
function RouteAdmin() {



  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path='usermanagement' element={<UserManagement/>}/>
           
      {/* <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/signIn'element={<SignInForm/>}/> */}
              <Route path='editsubcategory' element={<EditSubCategory/>}/>
              <Route path='Addsubcategory' element={<AddSubCategory/>}/>
      </Route>
    </Routes>

  )
}

export default RouteAdmin