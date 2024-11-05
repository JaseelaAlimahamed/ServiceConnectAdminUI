import SignIn from '../../pages/commonPages/Sign-in';

const AuthRoutes = [
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignIn />,
  },
  // Uncomment and add other routes as needed
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  // },
];

export default AuthRoutes;
