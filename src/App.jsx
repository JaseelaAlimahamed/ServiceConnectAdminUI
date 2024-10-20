import { Routes, Route, Navigate } from 'react-router-dom'
<<<<<<< HEAD
// import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import RouteDealer from './routes/dealerRoutes/RouteDealer';
=======
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import RouteFranchise from './routes/franchiseRoutes/RouteFranchise';
>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861



// import'./App.css';

function App() {


  return (
   
      
        <Routes>
<<<<<<< HEAD
          {/* <Route path="/admin/*" element={<RouteAdmin/>} /> */}
          <Route path="/dealer/*" element={<RouteDealer/>}/>    
=======
          <Route path="/admin/*" element={<RouteAdmin/>} />
          <Route path="/franchise/*" element={<RouteFranchise/>} />
    
>>>>>>> 370fdba6eaa686510d836dc3dc27ecdc61068861
        </Routes>
        
      
   
  );
}

export default App;
