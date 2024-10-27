import React from 'react'
import GraphDashboard from './GraphDashboard';
import { IoSettingsSharp } from 'react-icons/io5';

const CustomerArrival = () => {
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 },
    ];

    const handleSettings = () =>{
        alert("settings")
    }
    return (
        <div className='bg-primary rounded-lg shadow-lg w-full p-5'>
            <div className='flex flex-col gap-5 justify-between md:flex-row px-10'>
                <h1 className='text-2xl font-bold '>Customer Arrival</h1>

                <div>
                <IoSettingsSharp onClick={handleSettings} style={{fontSize: '30px'}} />
                </div>
            </div>
            <GraphDashboard
                type="line"
                data={data}
                Xaxis="name" // The key used for the X-axis
                line={['uv', 'pv']} // The keys representing the lines
                style={{ width: '90%', height: '250px' }} // Optional styling
            />
        </div>
    )
}

export default CustomerArrival