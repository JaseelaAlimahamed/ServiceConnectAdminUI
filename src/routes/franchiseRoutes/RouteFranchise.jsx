import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'
import ServiceProviders from '../../pages/franchisePages/ServiceProviders'
import ProvidersView from '../../pages/franchisePages/ProvidersView'

function RouteFranchise() {
  return (
    <Routes>
        <Route path='dealers' element ={<DealersPage/>} ></Route>
        <Route path='service-providers/*' element={<ServiceProviders/>}></Route>
        <Route path='providers' element={<ProvidersView/>}></Route>


    </Routes>
  )
}

export default RouteFranchise