


import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagementPage from '../../pages/adminPages/managementPages/UserManagementPage.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'

import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
import AddCategoryPage from '../../pages/adminPages/categorySubCategoryPages/AddCategoryPage.jsx'
import EditCategoryPage from '../../pages/adminPages/categorySubCategoryPages/EditCategoryPage.jsx'
import FranchiseProfileDetails from '../../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable.jsx'

import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'

import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'

import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'

import FranchiseDetailsTable from '../../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable.jsx'



import AddNewUser from '../../components/adminComponents/AddNewUser.jsx'

import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx'
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx'
import Finance from '../../pages/adminPages/Finance.jsx'
import IncomeManagementPage from '../../pages/adminPages/IncomeManagementPage.jsx'





function RouteAdmin() {



  return (
    <Routes>


      <Route path='/sign-in' element={<SignInForm />} />
      

      <Route element={<AdminLayout />}>

        <Route path='/profile' element={<AdminProfilePage />} />
        <Route path='/booking-details' element={<BookingDetailsPage />} />
        <Route path='/user-management' element={<UserManagementPage />} />
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


        <Route path='/Franchise' element={<FranchiseDetailsTable />} />


         <Route path='/userdetails' element={<UserDetails/>}/>
          {/* <Route path='/signIn'element={<SignInForm/>}/>  */}
         <Route path='AddCategory' element={<AddCategory/>}/>
         <Route path='EditCategory' element={<EditCategory/>}/>
         <Route path='FranchiseeDetails' element={<FranchiseeProfile/>}/>

        <Route path='/categories' element={<CategoryPage />} />

      <Route path='addnewuser' element={<AddNewUser/>}/>

        <Route path='/sub-categories' element={<SubCategoryPage />} />
 
        <Route path='/new-ads' element={<NewAdsPage />} />

        <Route path='/finance' element={<Finance />} /> 

        <Route path='/income-management' element={<IncomeManagementPage/>}/>
      </Route>
    </Routes>

  )
}

export default RouteAdmin