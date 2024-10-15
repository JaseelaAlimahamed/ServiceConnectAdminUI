import { Routes, Route, Navigate } from 'react-router-dom'
import DealerDetails from './components/franchise/dealerdetails/DealerDetails';
import FranchiseNotification from './components/franchise/notification/FranchiseNotification';
import RouteAdmin from './routes/adminRoutes/RouteAdmin';



// import'./App.css';

function App() {


  return (
   
      
        <Routes>
          <Route path="/admin/*" element={<RouteAdmin/>} />
          <Route path="/dealer-details" element={<FranchiseNotification/>} />

        </Routes>
        
      
   
  );
}

export default App;
