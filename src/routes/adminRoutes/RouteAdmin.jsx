


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'
import BookingDetailsPage from '../../pages/BookingDetailsPage.jsx'
import UserDetails from '../../pages/adminPages/UserDetails.jsx'
import AddSubCategory  from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory.jsx'

import AddCategory from '../../components/CategorySubCategory/AddEditCategory/AddCategory'
import EditCategory from '../../components/CategorySubCategory/AddEditCategory/EditCategory'
import FranchiseeProfile from '../../components/FranchiseComponents/FranchiseDetails/FranchiseeProfile'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'

import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import ServiceHistory from '../../pages/ServiceHistory.jsx'




function RouteAdmin() {


  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='profile' element={<AdminProfilePage />} />
        <Route path='Bookingdetails' element={<BookingDetailsPage />} />
        <Route path='/servicetype' element={<ServiceType />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='AddCategory' element={<AddCategory />} />
        <Route path='EditCategory' element={<EditCategory />} />
        <Route path='FranchiseeDetails' element={<FranchiseeProfile />} />
        <Route path='editsubcategory' element={<EditSubCategory />} />
        <Route path='addsubcategory' element={<AddSubCategory />} />
        <Route path='categories' element={<CategoryPage />} />
        <Route path='subcategories' element={<SubCategoryPage />} />
        <Route path='newads' element={<NewAdsPage />} />
        <Route path='servicehistory' element={<ServiceHistory />} />
      </Route>
    </Routes>

  )
}

export default RouteAdmin