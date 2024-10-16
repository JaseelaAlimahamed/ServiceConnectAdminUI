import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import ServiceProviders from '../../components/franchiseComponents/serviceProviders/ServiceProviders'
import DealersManagementPage from '../../pages/franchisePages/DealersManagementPage'


function RouteFranchise() {
  return (
    <Routes>
        <Route path='dealers' element ={<DealersPage/>} ></Route>

        <Route path='service-providers' element={<ServiceProviders/>}/>

        <Route path='dealers-management' element ={<DealersManagementPage/>} ></Route>

    </Routes>
  )
}

export default RouteFranchise