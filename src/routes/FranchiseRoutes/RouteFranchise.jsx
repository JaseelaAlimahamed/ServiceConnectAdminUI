


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FranchiseLayout from '../../layouts/FranchiseLayout'
import DashboardPage from '../../components/franchiseComponents/pages/DashboardPage'


function RouteFranchise() {



  return (
    <Routes>
      <Route element={<FranchiseLayout/>}>
      <Route path='dashboard' element={<DashboardPage/>}/>
      <Route path='dealer-details' element={<h2>Hello</h2>}/>
      <Route path='service-providers' element={<h2>Hello</h2>}/>
      <Route path='finance' element={<h2>Hello</h2>}/>
      <Route path='finance' element={<h2>Hello</h2>}/>
      <Route path='complaints' element={<h2>Hello</h2>}/>
      <Route path='profile' element={<h2>Hello</h2>}/>
      <Route path='settings' element={<h2>Hello</h2>}/>
      <Route path='servicemanagement' element={<h2>Hello</h2>}/>
      <Route path='notifications' element={<h2>Hello</h2>}/>
      </Route>
    </Routes>

  )
} 

export default RouteFranchise;