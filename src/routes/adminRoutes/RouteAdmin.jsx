


import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import AdminDashBoard from '../../pages/adminPages/dashBoardPages/AdminDashBoard.jsx'
import UserManagementPage from '../../pages/adminPages/managementPages/UserManagementPage.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'

import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
import AddCategoryPage from '../../pages/adminPages/categorySubCategoryPages/AddCategoryPage.jsx'
import EditCategoryPage from '../../pages/adminPages/categorySubCategoryPages/EditCategoryPage.jsx'
import FranchiseProfileDetails from '../../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable.jsx'
import NewFranchisee from '../../pages/franchisePages/NewFranchisee.jsx'

import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'

import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'

import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import ServiceProviderTable from '../../pages/adminPages/ServiceProviderManagement.jsx'

import FranchiseDetailsTable from '../../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable.jsx'
import AccountPage from '../../pages/adminPages/AccountPage.jsx'
import NotificationPage from '../../pages/adminPages/notificationPage/NotificationPage.jsx'

import AddNewUser from '../../components/adminComponents/userManagementComponents/AddNewUser.jsx'

// import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx'
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx'
import Finance from '../../pages/adminPages/Finance.jsx'
import IncomeManagementPage from '../../pages/adminPages/IncomeManagementPage.jsx'





function RouteAdmin() {



  return (
    <Routes>


      <Route path='/sign-in' element={<SignInForm />} />

      <Route element={<AdminLayout />}>
      <Route path='/' element={<AdminDashBoard />} />
      <Route path='/user-management' element={<UserManagementPage />} />
        <Route path='/user-details/:id' element={<UserDetails />} />
        <Route path='/add-new-user' element={<AddNewUser />} />

        <Route path='/service-providers' element={<ServiceProviderTable />} />


        <Route path='/Franchise' element={<FranchiseDetailsTable />} />
        <Route path='/Franchise-Details' element={<FranchiseProfileDetails />} />
        <Route path='/New-Franchisee' element={<NewFranchisee />} />
        {/* <Route path='/Edit-franchiseetype' element={<EditAddFranchiseeType />} /> */}

        <Route path='/booking-details' element={<BookingDetailsPage />} />
        <Route path='/service-management' element={<ServiceType />} />

        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/Add-Category' element={<AddCategoryPage />} />
        <Route path='/Edit-Category' element={<EditCategoryPage />} />

        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/edit-subcategory' element={<EditSubCategory />} />
        <Route path='/add-subcategory' element={<AddSubCategory />} />

        <Route path='/profile' element={<AdminProfilePage />} />
        <Route path='/accounts' element={<AccountPage />} />
        <Route path='/ads-management' element={<AdsManagement />} />
        <Route path='/new-ads' element={<NewAdsPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/income-management' element={<IncomeManagementPage />} />

      </Route>
    </Routes>

  )
}

export default RouteAdmin