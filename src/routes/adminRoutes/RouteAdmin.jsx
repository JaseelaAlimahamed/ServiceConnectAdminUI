


import React from 'react'

import { Routes, Route ,Navigate} from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'
import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'
import AddCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/AddCategory.jsx'
import EditCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/EditCategory.jsx'
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile.jsx'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'
import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/UserDetails'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'

function RouteAdmin() {



  return (
    <Routes>

     
      <Route path="/" element={<Navigate to="/admin/signIn"/>} />
      <Route path='/signIn' element={<SignInForm />} />

      <Route element={<AdminLayout />}>
        <Route path='/profile' element={<AdminProfilePage />} />
        <Route path='/bookingdetails' element={<BookingDetailsPage />} />
        <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='/servicetype' element={<ServiceType />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='/AddCategory' element={<AddCategory />} />
        <Route path='/EditCategory' element={<EditCategory />} />
        <Route path='/FranchiseeDetails' element={<FranchiseeProfile />} />
        <Route path='/editsubcategory' element={<EditSubCategory />} />
        <Route path='/addsubcategory' element={<AddSubCategory />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/subcategories' element={<SubCategoryPage />} />
        <Route path='/newads' element={<NewAdsPage />} />

      </Route>
    </Routes>

  )
} 

export default RouteAdmin