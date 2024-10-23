import { Routes, Route } from 'react-router-dom';
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import RouteDealer from './routes/dealerRoutes/RouteDealer';
import RouteFranchise from './routes/franchiseRoutes/RouteFranchise';


<<<<<<< HEAD
=======
// import'./App.css';

>>>>>>> 70b2610a9a6b712b8c4d15972bf0601193467378
function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/admin/*" element={<RouteAdmin />} />
      <Route path="/dealer/*" element={<RouteDealer />} />
      <Route path="/franchise/*" element={<RouteFranchise />} />
    </Routes>
=======
   
      
        <Routes>
          <Route path="/admin/*" element={<RouteAdmin/>} />


          <Route path='/franchise/*' element={<RouteFranchise/>}/>

        </Routes>
        

   
>>>>>>> 70b2610a9a6b712b8c4d15972bf0601193467378
  );
}

export default App;