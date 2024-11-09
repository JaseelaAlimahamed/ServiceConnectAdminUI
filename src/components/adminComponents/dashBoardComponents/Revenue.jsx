import React from 'react'
import GraphDashboard from './GraphDashboard';


const Revenue = () => {
    const pieData = [
        { name: 'Commission', value: 800 },
        { name: 'Ads', value: 100 },
        { name: 'New Service Registration', value: 100 },
       
    ];

    return (
        <div className='bg-primary rounded-lg shadow-lg p-3 '>  
            <GraphDashboard
                type="pie"
                pieData={pieData}
                isDonut={false}
                style={{ width: '100%', height: '250px' }}
            />
        </div>
    )
}

export default Revenue