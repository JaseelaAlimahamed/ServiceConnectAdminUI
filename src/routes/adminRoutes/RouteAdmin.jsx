import { Navigate } from "react-router-dom";
// import AdminDashBoard from "../../pages/adminPages/dashBoardPages/AdminDashBoard";
import UserManagementPage from "../../pages/adminPages/managementPages/UserManagementPage";
import ProfilePage from "../../pages/commonPages/ProfilePage";
import BookingDetailsPage from "../../pages/adminPages/BookingDetailsPage";
import AddCategoryPage from "../../pages/adminPages/categorySubCategoryPages/AddCategoryPage";
import EditCategoryPage from "../../pages/adminPages/categorySubCategoryPages/EditCategoryPage";
import FranchiseProfileDetails from "../../pages/commonPages/FranchiseProfileDetails";
import EditSubCategory from "../../components/adminComponents/CategorySubCategory/AddEditSubCategory/NewSubCategory";
import AddSubCategory from "../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory";
import ServiceType from "../../pages/adminPages/ServiceType";
import UserDetails from "../../pages/adminPages/managementPages/UserDetails";
import CategoryPage from "../../pages/adminPages/CategorySubCategoryPages/CategoryPage";
import SubCategoryPage from "../../pages/adminPages/CategorySubCategoryPages/SubCategoryPage";
import NewAdsPage from "../../pages/adminPages/AdsPages/NewAdsPage";
import ServiceProviderTable from "../../pages/commonPages/ServiceProviderManagement";
import FranchiseDetailsTable from "../../pages/adminPages/franchiseManagementPages/FranchiseDetailsTable";
import AccountPage from "../../pages/commonPages/AccountPage";
import NotificationPage from "../../pages/adminPages/notificationPage/NotificationPage";
import AddNewUser from "../../components/adminComponents/userManagementComponents/AddNewUser";
import AdsManagement from "../../pages/adminPages/AdsManagement";
import Finance from "../../pages/commonPages/Finance";
import IncomeManagementPage from "../../pages/adminPages/IncomeManagementPage";
import FranchiseeCategory from "../../components/adminComponents/FranchiseManagement/AddFranchaseeType";
import NewFranchisee from "../../pages/adminPages/NewFranchisePage";

const RouteAdmin = [
    // {
    //   path: "dashboard",
    //   element: <AdminDashBoard />,
    // },
    {
      path: "user-management",
      element: <UserManagementPage />,
    },
    {
      path: "user-details/:id",
      element: <UserDetails />,
    },
    {
      path: "user-management/add-new-user",
      element: <AddNewUser />,
    },
    {
      path: "service-providers",
      element: <ServiceProviderTable />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "franchise",
      
      children: [
        {
          path: '',
          element: <FranchiseDetailsTable />,
        },
        {
          path: "franchise-details/:id",
          element: <FranchiseProfileDetails />,
        },
        {
          path: "edit-add-franchiseType",
          element: <FranchiseeCategory />,
        },
        {
          path: 'new-franchise',
          element : <NewFranchisee/>
        }
      ],
    },

    {
      path: "booking-details",
      element: <BookingDetailsPage />,
    },
    {
      path: "service-management",
      element: <ServiceType />,
    },
    {
      path: "categories",
      element: <CategoryPage />,
    },
    {
      path: "add-category",
      element: <AddCategoryPage />,
    },
    {
      path: "edit-category",
      element: <EditCategoryPage />,
    },
    {
      path: "sub-categories",
      element: <SubCategoryPage />,
    },
    {
      path: "edit-subcategory",
      element: <EditSubCategory />,
    },
    {
      path: "add-subcategory",
      element: <AddSubCategory />,
    },
    
    {
      path: "accounts",
      element: <AccountPage />,
    },
    {
      path: "ads-management",
      element: <AdsManagement />,
    },
    {
      path: "new-ads",
      element: <NewAdsPage />,
    },
    {
      path: "notifications",
      element: <NotificationPage />,
    },
    {
      path: "finance",
      element: <Finance />,
    },
    {
      path: "income-management",
      element: <IncomeManagementPage />,
    },
    {
      path: "*",
      element: <Navigate to="/not-found" replace />, 
    },
  ];

export default RouteAdmin;
