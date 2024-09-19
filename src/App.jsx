import { Routes, Route } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import UserManagement from './pages/adminPages/managementPages/UserManagement';


// import'./App.css';

function App() {


  return (
    <Routes>
      <Route path="/admin" element={<RouteAdmin/>} />
      <Route path="/admin/usermanagement" element={<UserManagement/>} />
    </Routes>
  );
}

export default App;