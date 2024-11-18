import React from "react";
import UserManagementPage from "../pages/adminPages/managementPages/UserManagementPage";
import ProtectedRoute from "./ProtectedRoutes";
import FranchiseDetailsTable from "../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable";
import FranchiseProfileDetails from "../pages/commonPages/FranchiseProfileDetails";
import FranchiseeCategory from "../components/adminComponents/FranchiseManagement/AddFranchaseeType";
import NewFranchisee from "../pages/adminPages/NewFranchisePage";
import AddNewUser from "../components/adminComponents/userManagementComponents/AddNewUser";
import AdsManagement from "../pages/adminPages/AdsManagement";
import DealersPage from "../pages/franchisePages/DealersPage";
import CategoryPage from "../pages/adminPages/CategorySubCategoryPages/CategoryPage";
import SubCategoryPage from "../pages/adminPages/CategorySubCategoryPages/SubCategoryPage";
import UserDetails from "../pages/adminPages/managementPages/UserDetails";
import PaymentForm from "../pages/franchisePages/PaymentForm";
import AddEditCategoryPage from "../pages/adminPages/categorySubCategoryPages/AddCategoryPage";
import AddEditSubCategory from "../components/adminComponents/CategorySubCategory/AddEditSubCategory/NewSubCategory";
import ServiceProviderVerification from "../pages/dealerPages/ServiceProviderVerification";
import AddServiceProvider from "../pages/franchisePages/AddServiceProvider";
const protect = (element, allowedRoles) => (
  <ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>
);

const SeparateRoutes = [
  {
    path: "user-management",
    // Route for viewing user management page, restricted to admin
    element: protect(<UserManagementPage />, ["admin"]), 
  },
  {
    path: "user-management/add-new",
    // Route for adding a new user, restricted to admin
    element: protect(<AddNewUser />, ["admin"]), 
  },
  {
    path: "user-management/edit/:id",
    // Route for adding a new user, restricted to admin
    element: protect(<AddNewUser />, ["admin"]), 
  },
  {
    path: "user-management/details/:id",
    // Route for viewing user details by ID, restricted to admin
    element: protect(<UserDetails />, ["admin"]), 
  },

  
  {
    // Franchise management section
    path: "franchise",
    children: [
      {
        path: "",
        element: protect(<FranchiseDetailsTable />, ["admin"]), // Main franchise management page, restricted to admin
      },
      {
        path: "franchise-details/:id",
        element: protect(<FranchiseProfileDetails />, ["admin"]), // Detailed view of a specific franchise, restricted to admin
      },
      {
        path: "edit-add-franchiseType",
        element: protect(<FranchiseeCategory />, ["admin"]), // Page for adding/editing franchise types, restricted to admin
      },
      {
        path: "new-franchise",
        element: protect(<NewFranchisee />, ["admin"]), // Page for adding a new franchise, restricted to admin
      },
      {
        path: "edit-franchise/:id",
        element: protect(<NewFranchisee />, ["admin"]), // Page for adding a new franchise, restricted to admin
      },
    ],
  },
  {
    path: "franchisee",
    element: protect(<FranchiseProfileDetails />, ["dealer"]), // Franchise profile for dealer role, restricted to dealer
  },
  
  {
    // Ads management section
    path: "ads-management",
    element: protect(<AdsManagement />, ["admin"]), // Ads management accessible by admin and franchise
  },
  {
    path: "dealers",
    element: protect(<DealersPage />, ["franchise"]), // Dealers page for franchise role, restricted to franchise
  },
  {
    path: "payment",
    element: protect(<PaymentForm />, ["franchise"]),
  },

  {
    path: "dealers/dealer-management/:id",
    element: protect(<FranchiseProfileDetails />, ["franchise"]), // Franchise profile details view for a specific dealer, restricted to franchise
  },
  
  // Category management section
  {
    path: '/categories',
    element: protect(<CategoryPage />, ["admin"]), // Main categories management page, restricted to admin
  },
  {
    path: '/Add-Category',
    element: protect(<AddEditCategoryPage />, ["admin"]), // Page for adding a new category, restricted to admin
  },
  {
    path: '/edit-Category/:id',
    element: protect(<AddEditCategoryPage />, ["admin"]), // Page for editing an existing category, restricted to admin
  },

  //Sub  Category management section

  {
    path: '/sub-categories',
    element: protect(<SubCategoryPage />, ["admin"]), // Sub-category management page, restricted to admin
  },
  {
    path: '/add-subcategory',
    element: protect(<AddEditSubCategory />, ["admin"]), // Page for adding a new sub-category, restricted to admin
  },
  {
    path: 'edit-subcategory/:id',
    // Page for editing an existing sub-category, restricted to admin
    element: protect(< AddEditSubCategory/>, ["admin"]), 
  },


  //service provider verification restricted for dealer only
  {
    path: 'service-providers/verify/:id',
    // Page for editing an existing sub-category, restricted to admin
    element: protect(< ServiceProviderVerification/>, ["dealer"]), 
  },
    // add service provider 
  {
    path: 'service-providers/add-new',
    // Page for crete  an  service provider restricted to franchise
    element: protect(< AddServiceProvider/>, ["franchise","admin"]), 
  }


 ];

export default SeparateRoutes;
