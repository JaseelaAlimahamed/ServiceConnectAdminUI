import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import AddCategory from '../../components/CategorySubCategory/AddEditCategory/AddCategory'
import EditCategory from '../../components/CategorySubCategory/AddEditCategory/EditCategory'

function RouteAdmin() {


  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        {/* <Route path='usermanagement' element={<UserManagement/>}/> */}
           
      {/* <Route path='/userdetails' element={<UserDetails/>}/> */}
      {/* <Route path='/signIn'element={<SignInForm/>}/> */}

      <Route path='AddCategory' element={<AddCategory/>}/>
       <Route path='EditCategory' element={<EditCategory/>}/>

      </Route>
    </Routes>

  )
}

export default RouteAdmin