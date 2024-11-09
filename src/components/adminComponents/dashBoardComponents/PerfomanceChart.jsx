import React from 'react'
import GraphDashboard from './GraphDashboard';
import { FaRegCircle } from 'react-icons/fa';

const PerfomanceChart = () => {

    const data = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 },
    ];

    return (
        <div className='bg-primary rounded-lg shadow-lg'>
            <div className='flex flex-col gap-5 justify-between md:flex-row p-5'>
                <h1 className='text-2xl font-bold text-dark_blue'>Perfomance</h1>

                <div className='flex gap-3 font-semibold'>
                    <div>
                        <p className='text-light_gray flex items-center gap-2'><FaRegCircle style={{color:'yellow'}} />This week</p>
                        <span className='flex justify-center text-dark_blue font-bold text-lg'>8769</span>
                    </div>
                    <div>
                        <p className='text-light_gray flex items-center gap-2'><FaRegCircle style={{color:'red'}} />Last week</p>
                        <span className='flex justify-center text-dark_blue font-bold text-lg'>8769</span>
                    </div>
                </div>
            </div>
            <GraphDashboard
                type="area"
                data={data}
                Xaxis="name" 
                line={['uv', 'pv']} 
                style={{ width: '100%', height: '250px' }} 
            />
        </div>
    )
}

export default PerfomanceChart