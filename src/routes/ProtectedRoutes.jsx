import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Retrieve the user's role (assuming it’s stored in Redux)
  const userRole = 'admin'; // Adjust according to your Redux structure
 

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/sign-in" replace />;
  }

  // Render the protected component if authenticated and authorized
  return children;
};

export default ProtectedRoute;
