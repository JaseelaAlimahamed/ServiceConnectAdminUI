
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import UserDetails from '../../pages/adminPages/UserDetails'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import TransactionHistory from '../../pages/adminPages/TransactionPages/TransactionHistory'



function RouteAdmin() {


  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path='user-management' element={<UserManagement/>}/>

      <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='categories' element={<CategoryPage/>}/>
      <Route path='subcategories' element={<SubCategoryPage/>}/>
      <Route path='newads' element={<NewAdsPage/>}/>
      <Route path='transaction-history' element={<TransactionHistory/>}/>
      {/* <Route path='/signIn'element={<SignInForm/>}/> */}

      </Route>
    </Routes>

  )
}

export default RouteAdmin