import React from 'react'
import GraphDashboard from './GraphDashboard'

const Statitics = () => {
    const pieData = [
        { name: 'Active Users', value: 400 },
        { name: 'Inactive Users', value: 300 },
      ];
  return (
    <div className='bg-primary rounded-lg shadow-lg p-3'>
       <GraphDashboard 
        type="pie" 
        pieData={pieData} 
        isDonut={true} 
        style={{ width: '100%', height: '250px'}} 
      />
    </div>
  )
}

export default Statitics