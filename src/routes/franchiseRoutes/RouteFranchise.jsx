import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import Addnewservices from '../../components/franchiseComponents/services/Addnewservices'
import Editservice from '../../components/franchiseComponents/services/Editservice'

function RouteFranchise() {
  return (
    <Routes>
        <Route element={<FranchiseLayout/>}>
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />
        <Route path='addservices' element={<Addnewservices/>}/>
        <Route path='editservices' element={<Editservice/>}/>
        </Route>
    </Routes>
  )
}

export default RouteFranchise