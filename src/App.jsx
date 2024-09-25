import { Routes, Route, Navigate } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import SubCategoryList from './components/adminComponents/CategorySubCategory/CategoryComponents/SubCategoryList';



// import'./App.css';

function App() {


  return (
   
      
        <Routes>
          <Route path="/admin/*" element={<RouteAdmin/>} />
    
        </Routes>
        
      
   
  );
}

export default App;
