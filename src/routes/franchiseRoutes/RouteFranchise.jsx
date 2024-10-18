import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import DashboardPage from '../../pages/franchisePages/DashboardPage'
function RouteFranchise() {
  return (
    <Routes>
        <Route element={<FranchiseLayout/>}>
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dashboard' element ={<DashboardPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />
        </Route>
    </Routes>
  )
}

export default RouteFranchise