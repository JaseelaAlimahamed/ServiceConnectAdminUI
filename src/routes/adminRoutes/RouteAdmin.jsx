
import { Routes, Route } from 'react-router-dom'

import AdminLayout from '../../layouts/AdminLayout'

import UserManagement from '../../pages/adminPages/managementPages/UserManagement';
import EditSubCategory from '../../pages/adminPages/SubCategoryPages/EditSubCategoryPage';
import AddSubCategory from '../../pages/adminPages/SubCategoryPages/AddSubcategory';
import Accounts from '../../pages/adminPages/FranchisePages/Accounts';
import EditAddFranchiseeType from '../../pages/adminPages/FranchisePages/AddFranchiseType';


function RouteAdmin() {



  return (
    <Routes>

      <Route element={<AdminLayout/>}>
      <Route path='profile' element={<AdminProfilePage/>}/>
      <Route path='bookingdetails' element={<BookingDetailsPage/>}/>
        <Route path='usermanagement' element={<UserManagement/>}/>
              <Route path='editsubcategory' element={<EditSubCategory/>}/>
              <Route path='addsubcategory' element={<AddSubCategory/>}/>
              <Route path='editaddfranchiseetype' element={<EditAddFranchiseeType />}/>
              <Route path='accounts'   element={<Accounts/>}/>
      
      </Route>
    </Routes>

  )
} 

export default RouteAdmin