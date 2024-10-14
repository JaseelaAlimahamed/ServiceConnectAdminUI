import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/dealerComponents/layoutComponents/NavBar'
import SideBar from '../../components/dealerComponents/layoutComponents/SideBar'
import DealerLayout from '../../layouts/DealerLayout'

export default function RouteDealer() {
  return (
    <Routes >
        <Route path='/' element={<SideBar/>} />
    </Routes>
  )
}
