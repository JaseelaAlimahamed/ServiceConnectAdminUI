import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import AddServiceProvider from '../../pages/franchisePages/AddServiceProvider'

function RouteFranchise() {
  return (
    <Routes>
        <Route element={<FranchiseLayout/>}>
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />
        <Route path='add-service-provider' element={<AddServiceProvider />} />
        </Route>
    </Routes>
  )
}

export default RouteFranchise