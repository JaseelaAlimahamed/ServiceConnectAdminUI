import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import EditAddFranchiseeType from '../../components/FranchiseComponents/editFranchiseType/Add Franchasee Type'
import FranchiseNotification from '../../pages/franchisePages/FranchiseNotification'
import DealerDetails from '../../pages/franchisePages/DealerDetails'
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile'
import Accounts from '../../components/franchiseComponents/editFranchiseType/Accounts'


function RouteFranchise() {
  return (
    <Routes>
        <Route element={<FranchiseLayout/>}>
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />
        <Route path='dealers-details'   element={<DealerDetails/>}/>
        <Route path='FranchiseeDetails' element ={<FranchiseeProfile/>}/>
        <Route path='Editaddfranchiseetype' element ={<EditAddFranchiseeType/>}/>
        <Route path='accounts' element={<Accounts/>}/>
        <Route path='notifications'   element={<FranchiseNotification/>}/>
        </Route>
    </Routes>
  )
}

export default RouteFranchise