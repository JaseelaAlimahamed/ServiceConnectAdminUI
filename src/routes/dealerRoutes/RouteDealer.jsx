import React from "react";
import ForgotPassword from "../../pages/dealerPages/ForgotPasswordPage.jsx";
import DealerDashboard from "../../pages/dealerPages/DealerDashboard.jsx";
import ServiceProviderManagement from "../../pages/commonPages/ServiceProviderManagement.jsx";
import ServiceProviderVerification from "../../pages/dealerPages/ServiceProviderVerification.jsx";
import ServiceProviderVerificationForm from "../../pages/dealerPages/ServiceProviderVerificationForm.jsx";
import PaymentRequestPage from "../../pages/dealerPages/PaymentRequestPage.jsx";
import TransactionHistory from "../../pages/dealerPages/TransactionHistory";
import ServiceProviderTable from "../../pages/commonPages/ServiceProviderManagement.jsx";
import ProfilePage from "../../pages/commonPages/ProfilePage.jsx";
import FranchiseProfileDetails from "../../pages/commonPages/FranchiseProfileDetails.jsx";
import { Navigate } from "react-router-dom";

const DealerRoutes = [
  // { path: '/forgot-password', element: <ForgotPassword /> },
  { path: "dashboard", element: <DealerDashboard /> },
  {
    path: "service-providers",
    element: <ServiceProviderTable />,
  },

  {
    path: "profile",
    element: <ProfilePage />,
  },

  {
    path: "service-provider-management",
    element: <ServiceProviderManagement />,
  },
  {
    path: "service-provider-verification/:id",
    element: <ServiceProviderVerification />,
  },
  {
    path: "service-provider-verification-form",
    element: <ServiceProviderVerificationForm />,
  },
  { path: "payment-request", element: <PaymentRequestPage /> },
  { path: "franchisee", element: <FranchiseProfileDetails /> },
  { path: "finance", element: <TransactionHistory /> },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />, 
  },
];

export default DealerRoutes;
