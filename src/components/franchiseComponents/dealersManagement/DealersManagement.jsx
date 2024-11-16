import React, { useState } from 'react'
import DealerDetailsList from './DealerDetailsList'
import { BsThreeDots } from 'react-icons/bs';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import DealersManagementChart from './DealersManagementChart';

function DealersManagement() {





    const servicesData = [
        { month: 'Jan', totalServices: 40 },
        { month: 'Feb', totalServices: 35 },
        { month: 'Mar', totalServices: 10 },
        
      ];
    const revenueData = [
        { month: 'Jan', totalRevenue: 5000 },
        { month: 'Feb', totalRevenue: 4200 },
        { month: 'Mar', totalRevenue: 1000 },
        { month: 'Apr', totalRevenue: 3000 },
        
      ];
    const topDealers = [
        { id: 1, name: 'Dealer 1', totalServices: 120, totalRevenue: 24000 },
        { id: 2, name: 'Dealer 2', totalServices: 110, totalRevenue: 21000 },
        { id: 2, name: 'Dealer 2', totalServices: 110, totalRevenue: 21000 },
        
      ];
                  


  return (
    <div className='font-poppins bg-blue_bg'>
        
        <div className='w-full'>
            <DealersManagementChart 
            revenueData={revenueData}
            topDealers={topDealers}
            servicesData={servicesData}/>
        </div>
    </div>
    
  )
}

export default DealersManagement