


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FranchiseLayout from '../../layouts/FranchiseLayout'



function RouteFranchise() {



  return (
    <Routes>
      <Route element={<FranchiseLayout/>}>
      <Route path='dashboard' element={<h2>Hello</h2>}/>
      <Route path='dealers' element={<h2>Hello</h2>}/>
      <Route path='serviceproviders' element={<h2>Hello</h2>}/>
      <Route path='finance' element={<h2>Hello</h2>}/>
      <Route path='accounts' element={<h2>Hello</h2>}/>
      <Route path='profile' element={<h2>Hello</h2>}/>
      <Route path='chat' element={<h2>Hello</h2>}/>
      <Route path='settings' element={<h2>Hello</h2>}/>
      <Route path='servicemanagement' element={<h2>Hello</h2>}/>
      <Route path='adsmanagement' element={<h2>Hello</h2>}/>
      <Route path='notifications' element={<h2>Hello</h2>}/>
      </Route>
    </Routes>

  )
} 

export default RouteFranchise;