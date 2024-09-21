import { Routes, Route } from 'react-router-dom'
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