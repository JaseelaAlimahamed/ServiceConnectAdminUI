import { Routes, Route, Navigate } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import RouteDealer from './routes/dealerRoutes/RouteDealer';
import RouteFranchise from './routes/franchiseRoutes/RouteFranchise';


function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<RouteAdmin />} />
      <Route path="/dealer/*" element={<RouteDealer />} />
      <Route path="/franchise/*" element={<RouteFranchise />} />
    </Routes>
  );
}

export default App;