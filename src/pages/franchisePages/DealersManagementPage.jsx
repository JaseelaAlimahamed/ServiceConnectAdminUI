import React, { useState } from 'react'
import DealerDetailsList from '../../components/franchiseComponents/dealersManagement/DealerDetailsList'
import { BsThreeDots } from 'react-icons/bs';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import DealersManagementChart from '../../components/franchiseComponents/dealersManagement/DealersManagementChart';

function DealersManagementPage() {

    const tableHeadings = ["Dealer Name" , "Total Services" , "Total Revenue" , "Contact" , "Status" , "Action"] ;

    const dropdownValues = ["Active" , "Inactive"]

    const tableData = [{
        checkBox : <input type='checkbox'></input>,
        name : "Samanta William",
        id: 1,
        totalService: 2,
        totalRevenue: 2000,
        contact: <div className='flex items-center justify-center gap-3'>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
                </div>,
        status : "Not Active",
        actionIcon : <BsThreeDots className='inline' />
    } ,{
        checkBox : <input type='checkbox'></input>,
        id: 2,
        name : "Samanta William",
        totalService: 2,
        totalRevenue: 2000,
        contact: <div className='flex items-center justify-center gap-3'>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
                </div>,
        status : "Active",
        actionIcon : <BsThreeDots className='inline' />
    } ,{
        checkBox : <input type='checkbox'></input>,
        id: 3,
        name : "Samanta William",
        totalService: 2,
        totalRevenue: 2000,
        contact: <div className='flex items-center justify-center gap-3'>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
                <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
                </div>,
        status : "Not Active",
        actionIcon : <BsThreeDots className='inline' />
    }]

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
        <DealerDetailsList 
        tableHeadings={tableHeadings} 
        tableData={tableData} 
        page={'dealersDetails'}
        filter={true}
        dropdownValues={dropdownValues}/>
        <div className='w-full'>
            <DealersManagementChart 
            revenueData={revenueData}
            topDealers={topDealers}
            servicesData={servicesData}/>
        </div>
    </div>
    
  )
}

export default DealersManagementPage