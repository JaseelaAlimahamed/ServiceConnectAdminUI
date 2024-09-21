import { Routes, Route, Navigate } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';

import UserDetails from './pages/adminPages/UserDetails';
import SignInForm from './components/adminComponents/AdminSignIn';



// import'./App.css';

function App() {


  return (
    <Routes>
      <Route path="/admin" element={<RouteAdmin/>} />
    </Routes>

  );
    
  
}

export default App;