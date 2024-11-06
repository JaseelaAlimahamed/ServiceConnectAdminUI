import React from "react";
import ProfilePage from "../pages/commonPages/ProfilePage";
import NotificationPage from "../pages/adminPages/notificationPage/NotificationPage";
import ProtectedRoute from "./ProtectedRoutes";
import Dashboard from "../pages/commonPages/Dashboard";

const CommonRoutes = [
  //dashboard
  {
    path: "dashboard",
    element: (
      <ProtectedRoute allowedRoles={['dealer','franchise', 'admin']}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  //Profile page
  {
    path: "profile",
    element: (
      <ProtectedRoute allowedRoles={['user', 'admin']}>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  //notification page
  {
    path: "notification",
    element: (
      <ProtectedRoute allowedRoles={['user ']}>
        <NotificationPage />
      </ProtectedRoute>
    ),
  },

];

export default CommonRoutes;
