import { Routes, Route, Navigate } from "react-router-dom";
import RouteAdmin from "./routes/adminRoutes/RouteAdmin";
import FranchiseProfile from "./components/franchiseComponents/franchiseProfileComponents/FranchiseProfile";


// import'./App.css';

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<RouteAdmin />} />
      <Route path="/franchise/*" element={<FranchiseProfile />} />
    </Routes>
  );
}

export default App;
