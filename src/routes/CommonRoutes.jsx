import React from "react";
import ProfilePage from "../pages/commonPages/ProfilePage";
import SettingsPage from "../pages/commonPages/SettingsPage";
import NotificationPage from "../pages/adminPages/notificationPage/NotificationPage";
import ProtectedRoute from "./ProtectedRoutes";
import Dashboard from "../pages/commonPages/Dashboard";
import ServiceProviderPage from "../components/commonComponents/serviceProviderComponents/ServiceProviderManagement";
import Finance from "../pages/commonPages/Finance";
import AccountPage from "../pages/commonPages/AccountPage";
import ServiceType from "../pages/adminPages/ServiceType";
import ServiceProviderTable from "../pages/commonPages/ServiceProviderManagement";
import UserDetails from "../pages/adminPages/managementPages/UserDetails";
import DashboardPage from "../pages/commonPages/ServiceProviderDashboardPage";

// Utility function to wrap routes with ProtectedRoute
const protectedRoute = (element) => (
  <ProtectedRoute allowedRoles={["dealer", "franchise", "admin"]}>
    {element}
  </ProtectedRoute>
);

const CommonRoutes = [
  { path: "dashboard", element: protectedRoute(<Dashboard />) },
  { path: "profile", element: protectedRoute(<ProfilePage />) },
  { path: "service-providers", element: protectedRoute(<ServiceProviderTable />) },
  { path: "service-providers/details/:id", element: protectedRoute(<DashboardPage />) },
  { path: "finance", element: protectedRoute(<Finance />) },
  { path: "accounts", element: protectedRoute(<AccountPage />) },
  { path: "notifications", element: protectedRoute(<NotificationPage />) }, 

  { path: "settings", element: protectedRoute(<SettingsPage />) },

  
  // Uncomment if needed
  // { path: "service-management", element: protectedRoute(<ServiceType />) },
];

export default CommonRoutes;
