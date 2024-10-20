


// import React from 'react'

<<<<<<< HEAD
// import { Routes, Route, Navigate } from 'react-router-dom'
// import AdminLayout from '../../layouts/AdminLayout.jsx'
// import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
// import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'

// import BookingDetailsPage from '../../pages/BookingDetailsPage.jsx'
// import AddCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/AddCategory.jsx'
// import EditCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/EditCategory.jsx'
// import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile.jsx'

// import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
// import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'
=======
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout.jsx'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement.jsx'
import AdminProfilePage from '../../pages/adminPages/AdminProfilePage.jsx'

import BookingDetailsPage from '../../pages/adminPages/BookingDetailsPage.jsx'
import AddCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/AddCategory.jsx'
import EditCategory from '../../components/adminComponents/CategorySubCategory/AddEditCategory/EditCategory.jsx'
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile.jsx'

import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'
>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861

// import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory.jsx'
// import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'

<<<<<<< HEAD
// import ServiceType from '../../pages/adminPages/ServiceType.jsx'
// import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
// import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
// import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
// import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
// import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx'
=======
import ServiceType from '../../pages/adminPages/ServiceType.jsx'
import UserDetails from '../../pages/adminPages/managementPages/UserDetails.jsx'
import CategoryPage from '../../pages/adminPages/CategorySubCategoryPages/CategoryPage'
import SubCategoryPage from '../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage'
import NewAdsPage from '../../pages/adminPages/AdsPages/NewAdsPage'
import FranchiseeList from '../../components/adminComponents/FranchiseManagement/FranchiseeList.jsx'
import AdsManagement from '../../pages/adminPages/AdsManagement.jsx'

>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861

// function RouteAdmin() {



//   return (
//     <Routes>

<<<<<<< HEAD
     
//       <Route path="/" element={<Navigate to="/admin/signIn"/>} />
//       <Route path='/signIn' element={<SignInForm />} />
=======

      <Route path='/sign-in' element={<SignInForm />} />
      
>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861

//       <Route element={<AdminLayout />}>
//         <Route path='/profile' element={<AdminProfilePage />} />
//         <Route path='/bookingdetails' element={<BookingDetailsPage />} />
//         <Route path='/usermanagement' element={<UserManagement />} />
//         <Route path='/servicetype' element={<ServiceType />} />
//         <Route path='/userdetails' element={<UserDetails />} />
//         <Route path='/AddCategory' element={<AddCategory />} />
//         <Route path='/EditCategory' element={<EditCategory />} />
//         <Route path='/FranchiseeDetails' element={<FranchiseeProfile />} />
//         <Route path='/editsubcategory' element={<EditSubCategory />} />
//         <Route path='/addsubcategory' element={<AddSubCategory />} />
//         <Route path='/categories' element={<CategoryPage />} />
//         <Route path='/subcategories' element={<SubCategoryPage />} />
//         <Route path='/newads' element={<NewAdsPage />} />

<<<<<<< HEAD
//       </Route>
//     </Routes>

//   )
// }

// export default RouteAdmin
=======
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

        <Route path='/Add-Category' element={<AddCategory />} />
        <Route path='/Edit-Category' element={<EditCategory />} />
        <Route path='/Franchise-Details' element={<FranchiseeProfile />} />

        <Route path='/edit-subcategory' element={<EditSubCategory />} />
        <Route path='/add-subcategory' element={<AddSubCategory />} />
        <Route path='/Franchise' element={<FranchiseeList />} />

        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/new-ads' element={<NewAdsPage />} />

      </Route>
    </Routes>

  )
}

export default RouteAdmin
>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861
