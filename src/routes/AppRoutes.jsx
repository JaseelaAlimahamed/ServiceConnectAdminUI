import Layout from "../layouts/Layout";
import NotFound from "../pages/commonPages/NotFound";
import AuthRoutes from "./authRoutes/AuthRoutes";
import CommonRoutes from "./CommonRoutes";


// const AppRoutes = [
//     {
//         path: '/',
//         children: [
//             {
//                 path: '/',
//                 children: AuthRoutes
//             },
//             {
//                 path: "/",
//                 element: <Layout/>,
//                 children: [
//                     {
//                         path: '/admin/*',
//                         children: adminRoutes
//                     },
//                     {
//                         path: '/dealer/*',
//                         children: dealerRoutes
//                     },
//                     {
//                         path: '/franchise/*',
//                         children: franchiseRoutes
//                     },

//                 ]
//             },
//             {
//                 path: '/not-found',
//                 element: <NotFound />,
//               },
//         ]
//     }

// ];

const AppRouter = [
  {
    path: "/",
    children: [
      {
        path: "/",
        children: AuthRoutes,
      },
      {
        path: "/",
        element: <Layout />,
        children: CommonRoutes,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
    ],
  },
];
export default AppRouter;
