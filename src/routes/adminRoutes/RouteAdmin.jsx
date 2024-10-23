
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/adminProfilePage/AdminProfilePage.jsx'
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx'
import BookingDetailsPage from '../../pages/adminPages/bookingdetailsPage/BookingDetailsPage.jsx'
import AddCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/AddCategory.jsx'
import EditCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/EditCategory.jsx'
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile.jsx'
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'

import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'
import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'

import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx'

import ServiceProviderList from '../../pages/adminPages/ServiceProviderList.jsx'

import NotificationPage from '../../pages/adminPages/notificationPage/NotificationPage.jsx'


import TransactionHistory from '../../pages/adminPages/TransactionPages/TransactionHistory'

import ServiceHistory from '../../pages/adminPages/serviceHistoryPage/ServiceHistory.jsx';









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
        <Route path='/service-type' element={<ServiceType />} />
        <Route path='/ads-management' element={<AdsManagement />} />
        <Route path='/user-details' element={<UserDetails />} />
        <Route path='/Add-Category' element={<AddCategory />} />
        <Route path='/Edit-Category' element={<EditCategory />} />
        <Route path='/Franchise-Details' element={<FranchiseeProfile />} />
        <Route path='/Franchisee' element={<FranchiseeList />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/new-ads' element={<NewAdsPage />} />
        <Route path='/notifications' element={<NotificationPage />} />


      </Route>
    </Routes>

  )
}

export default RouteAdmin;
