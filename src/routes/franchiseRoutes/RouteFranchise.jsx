
import React from 'react'
import { Routes } from 'react-router-dom'
import FranchiseeProfile from '../../components/FranchiseComponents/FranchiseDetails/FranchiseeProfile'
import EditAddFranchiseeType from '../../components/franchiseComponents/Edit/Add Franchasee Type'
import Accounts from '../../components/franchiseComponents/Edit/Accounts'


function RouteFranchise() {
  return (
    <Routes>
        <Route path='FranchiseeDetails' element ={<FranchiseeProfile/>}/>
        <Route path='Editaddfranchiseetype' element ={<EditAddFranchiseeType/>}/>
        <Route path='accounts'   element={<Accounts/>}/>


    </Routes>
  )
}

export default RouteFranchise
