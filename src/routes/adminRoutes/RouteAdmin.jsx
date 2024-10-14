
import React from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx';
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx';
import AdminProfilePage from '../../pages/adminPages/adminProfilePage/AdminProfilePage.jsx';
import BookingDetailsPage from '../../pages/adminPages/bookingdetailsPage/BookingDetailsPage.jsx';
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx';
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx';
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory.jsx';
import AddCategory from '../../components/CategorySubCategory/AddEditCategory/AddCategory.jsx';
import EditCategory from '../../components/CategorySubCategory/AddEditCategory/EditCategory.jsx';
import FranchiseeProfile from '../../components/FranchiseComponents/FranchiseDetails/FranchiseeProfile.jsx';
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx';
import ServiceType from '../../pages/adminPages/ServiceType.jsx';
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage.jsx';
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage.jsx';
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage.jsx';
import ServiceHistory from '../../pages/adminPages/serviceHistoryPage/ServiceHistory.jsx';

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
        <Route path='servicehistory' element={<ServiceHistory />} />

      </Route>
    </Routes>

  )
} 

export default RouteAdmin;
