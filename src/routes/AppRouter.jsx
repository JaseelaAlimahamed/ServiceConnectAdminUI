import Layout from "../layouts/Layout";
import adminRoutes from "./adminRoutes/RouteAdmin";
import AuthRoutes from "./authRoutes/AuthRoutes";
import dealerRoutes from './dealerRoutes/RouteDealer';
import franchiseRoutes from './franchiseRoutes/RouteFranchise';

const AppRoutes = [
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
];

export default AppRoutes;
