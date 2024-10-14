import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ServiceProviders from '../../components/franchiseComponnets/serviceProvider/ServiceProviders'

function RouteFranchise() {
  return (
    <div>
        <Routes>
            <Route path="/service-provider" element={<ServiceProviders/>} />
        </Routes>
      
    </div>
  )
}

export default RouteFranchise
