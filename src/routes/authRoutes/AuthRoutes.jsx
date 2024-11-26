import SignIn from '../../pages/commonPages/Sign-in';
import { Navigate } from "react-router-dom";

const AuthRoutes = [
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />, 
  },
  
 
];

export default AuthRoutes;