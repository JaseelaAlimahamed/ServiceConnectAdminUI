import React from "react";
import UserManagementPage from "../pages/adminPages/managementPages/UserManagementPage";
import ProtectedRoute from "./ProtectedRoutes";
import FranchiseDetailsTable from "../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable";
import FranchiseProfileDetails from "../pages/commonPages/FranchiseProfileDetails";
import FranchiseeCategory from "../components/adminComponents/FranchiseManagement/AddFranchaseeType";
import NewFranchisee from "../pages/adminPages/NewFranchisePage";
import AddNewUser from "../components/adminComponents/userManagementComponents/AddNewUser";
import ServiceType from "../pages/adminPages/ServiceType";
import AdsManagement from "../pages/adminPages/AdsManagement";
import DealersPage from "../pages/franchisePages/DealersPage";
import CategoryPage from "../pages/adminPages/CategorySubCategoryPages/CategoryPage";
import AddCategoryPage from "../pages/adminPages/categorySubCategoryPages/AddCategoryPage";
import SubCategoryPage from "../pages/adminPages/CategorySubCategoryPages/SubCategoryPage";
import NewSubCategory from "../components/adminComponents/CategorySubCategory/AddEditSubCategory/NewSubCategory";
import EditCategoryPage from "../pages/adminPages/categorySubCategoryPages/EditCategoryPage";
import UserDetails from "../pages/adminPages/managementPages/UserDetails";
import PaymentForm from "../pages/franchisePages/PaymentForm";

const protect = (element, allowedRoles) => (
  <ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>
);

const SeparateRoutes = [
  {
    path: "user-management",
    element: protect(<UserManagementPage />, ["admin"]),
  },
  {
    path: "user-management/add-new",
    element: protect(<AddNewUser />, ["admin"]),
  },
  {
    path: "user-management/details/:id",
    element: protect(<UserDetails />, ["admin"]),
  },
  
  {
    path: "franchise",
    children: [
      {
        path: "",
        element: protect(<FranchiseDetailsTable />, ["admin"]),
      },
      {
        path: "franchise-details/:id",
        element: protect(<FranchiseProfileDetails />, ["admin"]),
      },
      {
        path: "edit-add-franchiseType",
        element: protect(<FranchiseeCategory />, ["admin"]),
      },
      {
        path: "new-franchise",
        element: protect(<NewFranchisee />, ["admin"]),
      },
    ],
  },

  {
    path: "service-management",
    element: protect(<ServiceType />, ["admin", 'franchise', ]),
  },

  {
    path: "ads-management",
    element: protect(<AdsManagement />, ["admin", "franchise"]),
  },
  {
    path: "dealers",
    element: protect(<DealersPage />, ["franchise"]),
  },
  {
    path: "payment",
    element: protect(<PaymentForm />, ["franchise"]),
  },

  {
    path: "dealers/dealer-management/:id",
    element: protect(<FranchiseProfileDetails />, ["franchise"]),
  },
  {
    path :'/categories',
    element: protect(<CategoryPage />, ["admin"]),

  },
  {
    path :'/Add-Category',
    element: protect(<AddCategoryPage />, ["admin"]),

  },
  {
    path :'/edit-Category',
    element: protect(<EditCategoryPage />, ["admin"]),

  },
  {
    path :'/sub-categories',
    element: protect(<SubCategoryPage />, ["admin"]),

  },
  {
    path :'/add-subcategory',
    element: protect(<NewSubCategory />, ["admin"]),
  },
//   {
//     path :'/edit-subcategory',
//     element: protect(<Edit />, ["admin"]),
//   }
];

export default SeparateRoutes;


{/* <Route path='/categories' element={<CategoryPage />} />
        <Route path='/Add-Category' element={<AddCategoryPage />} />

        <Route path='/Edit-Category' element={<EditCategoryPage />} />

        <Route path='/sub-categories' element={<SubCategoryPage />} />
        <Route path='/edit-subcategory' element={<EditSubCategory />} />

        <Route path='/add-subcategory' element={<AddSubCategory />} /> */}
