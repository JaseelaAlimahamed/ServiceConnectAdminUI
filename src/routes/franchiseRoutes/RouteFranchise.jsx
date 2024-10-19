import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealersPage from '../../pages/franchisePages/DealersPage'

function RouteFranchise() {
  return (
    <Routes>
        <Route path='dealers' element ={<DealersPage/>} ></Route>
    </Routes>
  )
}

export default RouteFranchise