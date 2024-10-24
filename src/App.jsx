import { Routes, Route, Navigate } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import RouteFranchise from './routes/franchiseRoutes/RouteFranchise';


// import'./App.css';

function App() {
  return (
   
      
        <Routes>
          <Route path="/admin/*" element={<RouteAdmin/>} />


          <Route path='/franchise/*' element={<RouteFranchise/>}/>

        </Routes>
        

   
  );
}

export default App;
