import { Routes, Route } from 'react-router-dom'
import RouteAdmin from './routes/adminRoutes/RouteAdmin';
import SignIn from './components/adminComponents/AdminSignIn';

// import'./App.css';

function App() {


  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/admin" element={<RouteAdmin/>} />
    </Routes>
  );
}

export default App;