


import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminLayout from '../../layouts/AdminLayout'


import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'
import EditAddFranchiseeType from '../../components/franchiseComponents/Edit/Add Franchasee Type'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'
import BookingDetailsPage from '../../pages/BookingDetailsPage.jsx'
import AddCategory from '../../components/CategorySubCategory/AddEditCategory/AddCategory'
import EditCategory from '../../components/CategorySubCategory/AddEditCategory/EditCategory'
import FranchiseeProfile from '../../components/FranchiseComponents/FranchiseDetails/FranchiseeProfile'
import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/UserDetails'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import Accounts from '../../components/franchiseComponents/Edit/Accounts'

function RouteAdmin() {



  return (
    <Routes>

      <Route element={<AdminLayout/>}>
      <Route path='profile' element={<AdminProfilePage/>}/>
      <Route path='bookingdetails' element={<BookingDetailsPage/>}/>
        <Route path='usermanagement' element={<UserManagement/>}/>
              <Route path='editsubcategory' element={<EditSubCategory/>}/>
              <Route path='addsubcategory' element={<AddSubCategory/>}/>
              <Route path='Editaddfranchiseetype' element={<EditAddFranchiseeType />}/>
              <Route path='accounts'   element={<Accounts/>}/>
       <Route path='/servicetype' element={<ServiceType/>}/>
         <Route path='/userdetails' element={<UserDetails/>}/>
         <Route path='/signIn'element={<SignInForm/>}/>
         <Route path='AddCategory' element={<AddCategory/>}/>
         <Route path='EditCategory' element={<EditCategory/>}/>
         <Route path='FranchiseeDetails' element={<FranchiseeProfile/>}/>
      <Route path='categories' element={<CategoryPage/>}/>
      <Route path='subcategories' element={<SubCategoryPage/>}/>
      <Route path='newads' element={<NewAdsPage/>}/>
      </Route>
    </Routes>

  )
} 

export default RouteAdmin