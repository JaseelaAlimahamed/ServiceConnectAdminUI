import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'
import FranchiseLayout from '../../layouts/FranchiseLayout'

import AddServiceProvider from '../../pages/franchisePages/AddServiceProvider'

import FranchaseeCategory from '../../components/franchiseComponents/editFranchiseType/AddFranchaseeType'
import FranchiseNotification from '../../pages/franchisePages/FranchiseNotification'
import DealerDetails from '../../pages/franchisePages/DealerDetails'
import FranchiseeProfile from '../../components/adminComponents/FranchiseDetails/FranchiseeProfile'
import Accounts from '../../components/franchiseComponents/editFranchiseType/Accounts'

import ServiceProviderPage from '../../pages/franchisePages/Service_Provider_DetailsPage'
import RecentServiceDetails from '../../pages/franchisePages/Recent_Service_DetailsPage'


import DashboardPage from '../../pages/franchisePages/DashboardPage'
import EditServicePage from '../../pages/franchisePages/EditServicePage'
import AddServicePage from '../../pages/franchisePages/AddServicePage'
import SignInPage from '../../pages/franchisePages/SignInPage'
import AddNewDealer from '../../pages/franchisePages/AddNewDealer'


function RouteFranchise() {
  return (
    <Routes>
        <Route path='sign-in' element ={<SignInPage/>} />
        <Route element={<FranchiseLayout/>}>
      
        <Route path='dealers' element ={<DealersPage/>} />
        <Route path='dashboard' element ={<DashboardPage/>} />
        <Route path='dealers-management' element ={<DealersManagementPage/>} />

        <Route path='add-service-provider' element={<AddServiceProvider />} />

        <Route path='dealers-details'   element={<DealerDetails/>}/>
        <Route path='add-dealer' element ={<AddNewDealer/>}/>
        <Route path='Franchisee-Details' element ={<FranchiseeProfile/>}/>
        <Route path='Edit-add-franchiseetype' element ={<FranchaseeCategory/>}/>
        <Route path='accounts' element={<Accounts/>}/>
        <Route path='notifications'   element={<FranchiseNotification/>}/>
        <Route path='service-provider-details'   element={<ServiceProviderPage/>}/>

        <Route path='recent-service-details'   element={<RecentServiceDetails/>}/>
        <Route path='edit-service-details'   element={<EditServicePage/>}/>
        <Route path='add-service-details'   element={<AddServicePage/>}/>


        </Route>
    </Routes>
  )
}

export default RouteFranchise