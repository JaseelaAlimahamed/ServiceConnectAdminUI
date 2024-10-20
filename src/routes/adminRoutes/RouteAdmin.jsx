import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout.jsx';
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx';
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx';
import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx';
import AddCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/AddCategory.jsx';
import EditCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/EditCategory.jsx';
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile.jsx';
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx';
import ServiceType from '../../pages/adminPages/ServiceType.jsx';
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx';
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage';
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage';
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage';
import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx';
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx';

function RouteAdmin() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/sign-in" />} />
      <Route path='/sign-in' element={<SignInForm />} />

      <Route element={<AdminLayout />}>
        <Route path='/profile' element={<AdminProfilePage />} />
        <Route path='/booking-details' element={<BookingDetailsPage />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/service-type' element={<ServiceType />} />
        <Route path='/ads-management' element={<AdsManagement />} />
        <Route path='/user-details' element={<UserDetails />} />
        <Route path='/add-category' element={<AddCategory />} />
        <Route path='/edit-category' element={<EditCategory />} />
        <Route path='/franchise-details' element={<FranchiseeProfile />} />
        <Route path='/franchise' element={<FranchiseeList />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/new-ads' element={<NewAdsPage />} />
        {/* Add any other routes as needed */}
      </Route>
    </Routes>
  );
}

export default RouteAdmin;
