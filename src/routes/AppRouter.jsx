import Layout from "../layouts/Layout";
import NotFound from "../pages/commonPages/NotFound";
import adminRoutes from "./adminRoutes/RouteAdmin";
import AuthRoutes from "./authRoutes/AuthRoutes";
import dealerRoutes from './dealerRoutes/RouteDealer';
import franchiseRoutes from './franchiseRoutes/RouteFranchise';

const AppRoutes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                children: AuthRoutes
            },
            {
                path: "/",
                element: <Layout/>,
                children: [
                    {
                        path: '/admin/*',
                        children: adminRoutes
                    },
                    {
                        path: '/dealer/*',
                        children: dealerRoutes
                    },
                    {
                        path: '/franchise/*',
                        children: franchiseRoutes
                    },
                    
                ]
            },
            {
                path: '/not-found',
                element: <NotFound />, 
              },
        ]
    }
    
];

export default AppRoutes;
