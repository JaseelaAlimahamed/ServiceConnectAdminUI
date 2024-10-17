


import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'

import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
import AddCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/AddCategoryPage.jsx'
import EditCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/EditCategoryPage.jsx'
import FranchiseProfileDetails from '../../pages/adminPages/FranchiseDetailsPages/FranchiseProfileDetails.jsx'

import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'

import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'

import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import FranchiseDetailsTable from '../../pages/adminPages/FranchiseManagementPages/FranchiseDetailsTable.jsx'
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx'


function RouteAdmin() {



  return (
    <Routes>


      <Route path='/sign-in' element={<SignInForm />} />
      

      <Route element={<AdminLayout />}>

        <Route path='/profile' element={<AdminProfilePage />} />
        <Route path='/booking-details' element={<BookingDetailsPage />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/edit-subcategory' element={<EditSubCategory />} />
        <Route path='/add-subcategory' element={<AddSubCategory />} />
        {/* <Route path='/Edit-franchiseetype' element={<EditAddFranchiseeType />} /> */}
        {/* <Route path='/accounts' element={<Accounts />} /> */}
        <Route path='/service-type' element={<ServiceType />} />

        <Route path='/ads-management' element={<AdsManagement />} />

        <Route path='/user-details' element={<UserDetails />} />

        <Route path='/Add-Category' element={<AddCategoryPage />} />
        <Route path='/Edit-Category' element={<EditCategoryPage />} /> 
        <Route path='/Franchise-Details' element={<FranchiseProfileDetails />} />

        <Route path='/edit-subcategory' element={<EditSubCategory />} />
        <Route path='/add-subcategory' element={<AddSubCategory />} />
        <Route path='/Franchise' element={<FranchiseDetailsTable />} />

        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/new-ads' element={<NewAdsPage />} />

      </Route>
    </Routes>

  )
}

export default RouteAdmin