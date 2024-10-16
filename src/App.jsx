import { Routes, Route, Navigate } from 'react-router-dom'
import DealerDetails from './components/franchiseComponents/dealer/DealerDetails';
import RouteAdmin from './routes/adminRoutes/RouteAdmin';



// import'./App.css';

function App() {


  return (
   
      
        <Routes>
          <Route path="/admin/*" element={<RouteAdmin/>} />
        </Routes>
        
      
   
  );
}

export default App;
