import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import SignInPage from '../../pages/franchisePages/Sign_In'
import AddNewDealer from '../../pages/franchisePages/Add_Dealer'

function RouteFranchise() {
  return (
    <Routes>
        <Route element={<FranchiseLayout/>}>
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />
        <Route path='addnewdealer' element ={<AddNewDealer/>}/>
        
        </Route>
    </Routes>
  )
}

export default RouteFranchise