import React from 'react'
import GraphDashboard from './GraphDashboard'
import { FaRegCircle } from 'react-icons/fa';

const Finance = ({monthly_data}) => {
    console.log(monthly_data)
    // const data = [
    //     { name: 'Jan', uv: 0, pv: 0 },
    //     { name: 'Feb', uv: 3000, pv: 1398 },
    //     { name: 'Mar', uv: 2000, pv: 9800 },
    //     { name: 'Apr', uv: 2780, pv: 3908 },
    //     { name: 'May', uv: 1890, pv: 4800 },
    //     { name: 'Jun', uv: 2390, pv: 3800 },
    //     { name: 'Jul', uv: 3490, pv: 4300 },
    // ];
    const data = monthly_data.map(item => {
        // Convert month number to month name
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthName = monthNames[item.month - 1];
      
        // Assign income and expense values to 'uv' and 'pv' (or adjust as needed)
        return {
          name: monthName,
          uv: item["total_income "],  // 'uv' represents total_income in your desired structure
          pv: item.total_expense  // 'pv' represents total_expense in your desired structure
        };
      });
const totalIncome = monthly_data.reduce((sum, item) => sum + item["total_income "], 0);
const totalExpense = monthly_data.reduce((sum, item) => sum + item.total_expense, 0);

    
    return (
        <div className='bg-primary rounded-lg shadow-lg p-3'>
            <div className='flex flex-col gap-5 justify-between md:flex-row p-5'>
                <h1 className='font-bold text-dark_blue'>Finance</h1>

                <div className='flex gap-3 font-semibold'>
                    <div>
                        <p className='text-light_gray flex items-center gap-2'><FaRegCircle style={{color:'yellow'}} />Total Income</p>
                        <span className='flex justify-center text-dark_blue font-bold text-lg'>{totalIncome}</span>
                    </div>
                    <div>
                        <p className='text-light_gray flex items-center gap-2'><FaRegCircle style={{color:'red'}} />Total Expensive</p>
                        <span className='flex justify-center text-dark_blue font-bold text-lg'>{totalExpense}</span>
                    </div>
                </div>
            </div>
            <GraphDashboard
                type="bar"
                data={data}
                Xaxis="name" // The key used for the X-axis
                line={['uv', 'pv']} // The keys representing the bars
                style={{ width: '100%', height: '250px'}} // Optional styling
            />
        </div>
    )
}

export default Finance