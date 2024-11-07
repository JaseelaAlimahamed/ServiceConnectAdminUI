import Layout from "../layouts/Layout";
import NotFound from "../pages/commonPages/NotFound";
import AuthRoutes from "./authRoutes/AuthRoutes";
import CommonRoutes from "./CommonRoutes";
import SeparateRoutes from "./SeparateRoutes";

const AppRouter = [
  {
    path: "/",
    children: [
      ...AuthRoutes,
      {
        path: "/",
        element: <Layout />,
        children: [
          ...CommonRoutes,
          ...SeparateRoutes,
        ],
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
    ],
  },
];

export default AppRouter;
