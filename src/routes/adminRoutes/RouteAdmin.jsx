import React from 'react'
import Graph from '../../components/adminComponents/Graph'
import UserDetails from '../../pages/adminPages/UserDetails'
import SignIn from '../../components/adminComponents/AdminSignIn';

function RouteAdmin() {
  
  return (
    <div className='bg-blue_bg'>
      <SignIn/>
      <UserDetails/>
    </div>
  )
}

export default RouteAdmin