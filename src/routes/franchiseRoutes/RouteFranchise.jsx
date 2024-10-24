import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import ServiceProviderPage from '../../pages/franchisePages/Service_Provider_DetailsPage'
import RecentServiceDetails from '../../pages/franchisePages/Recent_Service_DetailsPage'

function RouteFranchise() {
  return (
    <Routes>
        <Route path='dealers' element ={<DealersPage/>} ></Route>
        <Route path='service-provider-details' element ={<ServiceProviderPage/>} ></Route>
        <Route path='recent-service-details' element ={<RecentServiceDetails/>} ></Route>

    </Routes>
  )
}

export default RouteFranchise