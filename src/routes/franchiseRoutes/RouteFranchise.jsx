import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import ServiceProviders from '../../components/franchiseComponents/serviceProviders/ServiceProviders'
import ProvidersView from '../../components/franchiseComponents/serviceProviders/ProvidersView'

function RouteFranchise() {
  return (
    <Routes>
        <Route path='dealers' element ={<DealersPage/>} ></Route>
        <Route path='service-providers' element={<ServiceProviders/>}/>
        <Route path='service-providers/providers' element={<ProvidersView/>}/>
    </Routes>
  )
}

export default RouteFranchise