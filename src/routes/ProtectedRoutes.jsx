import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const {role} = useSelector(state => state.auth)
 

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/sign-in" replace />;
  }

  // Render the protected component if authenticated and authorized
  return children;
};

export default ProtectedRoute;
