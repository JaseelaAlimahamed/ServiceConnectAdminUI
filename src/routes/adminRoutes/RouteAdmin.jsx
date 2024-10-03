// import React from 'react'

import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'
import BookingDetailsPage from '../../pages/BookingDetailsPage.jsx'
import UserDetails from '../../pages/adminPages/UserDetails.jsx'
=======
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory  from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory.jsx'
>>>>>>> f4cc44fed0e55d8410d6ffafe5f1fbf026ab1782
function RouteAdmin() {


  return (
    <Routes>
      <Route  element={<AdminLayout/>}>
       <Route path='/usermanagement' element={<UserManagement/>}/>
           
<<<<<<< HEAD
      <Route path='/userdetails' element={<UserDetails/>}/>
      {/*<Route path='/signIn'element={<SignInForm/>}/> */}
      <Route path='profile' element={<AdminProfilePage/>}/>
      <Route path='Bookingdetails' element={<BookingDetailsPage/>}/>
      

      
=======
      {/* <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/signIn'element={<SignInForm/>}/> */}
       <Route path='editsubcategory' element={<EditSubCategory/>}/>
       <Route path='addsubcategory' element={<AddSubCategory/>}/>
>>>>>>> f4cc44fed0e55d8410d6ffafe5f1fbf026ab1782
      </Route>
    </Routes>

  )
}

export default RouteAdmin