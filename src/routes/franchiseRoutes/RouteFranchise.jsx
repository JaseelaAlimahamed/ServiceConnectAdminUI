import React from "react";
import DealersPage from "../../pages/franchisePages/DealersPage";
import AddServiceProvider from "../../pages/franchisePages/AddServiceProvider";
import FranchiseNotification from "../../pages/franchisePages/FranchiseNotification";
import FranchiseeProfile from "../../components/commonComponents/FranchiseDetails/FranchiseeProfile";
import Accounts from "../../components/franchiseComponents/editFranchiseType/Accounts";
import ServiceProviderPage from "../../pages/commonPages/ServiceProviderManagement";
import RecentServiceDetails from "../../pages/franchisePages/Recent_Service_DetailsPage";
import DashboardPage from "../../pages/franchisePages/DashboardPage";
import ProfilePage from "../../pages/commonPages/ProfilePage";
import FranchiseProfileDetails from "../../pages/commonPages/FranchiseProfileDetails";
import { Navigate } from "react-router-dom";

const FranchiseRoutes = [
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "serviceproviders",
    element: <ServiceProviderPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },


  {
    path: "dealers",
    element: <DealersPage />,
  },
  {
    path: "dealers/dealer-management/:id",
    element: <FranchiseProfileDetails />,
  },
  {
    path: "add-service-provider",
    element: <AddServiceProvider />,
  },
  {
    path: "dealers/dealers-details",
    element: <FranchiseProfileDetails />,
  },

  
  {
    path: "accounts",
    element: <Accounts />,
  },
  {
    path: "notifications",
    element: <FranchiseNotification />,
  },
  {
    path: "recent-service-details",
    element: <RecentServiceDetails />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />, 
  },
];

export default FranchiseRoutes;
