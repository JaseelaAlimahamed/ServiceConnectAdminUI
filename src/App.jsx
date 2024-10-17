import { Routes, Route, Navigate } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin'
import AddNewDealer from './components/FranchiseComponents/dealerComponents/Add_Dealer'
import AddNewUser from './components/adminComponents/AddNewUser'
import SignInPage from './components/franchiseComponents/pages/Sign_In'



// import'./App.css';

function App() {


  return (
    

   
    
         <Routes>
        //<Route path="/admin/*" element={<RouteAdmin/>} />
        <Route path='/Add_Dealer' element={<AddNewDealer/>}/>
       
        <Route path='/SignInPage' element={<SignInPage/>}/>
    
    
         </Routes>
       
      
   
  );
}

export default App;
