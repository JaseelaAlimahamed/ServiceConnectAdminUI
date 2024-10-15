import React from 'react'
import DealerTable from '../../components/franchiseComponents/dealers/DealerTable';
import DealerCard from '../../components/franchiseComponents/dealers/DealerCard';
import DealerDropdown from '../../components/franchiseComponents/dealers/DealerDropdown';
import DealerPagination from '../../components/franchiseComponents/dealers/DealerPagination';
import DealerSearchBar from '../../components/franchiseComponents/dealers/DealerSearchBar';
import AddDealerButton from '../../components/franchiseComponents/dealers/AddDealerButton';
import { IoPersonOutline , IoCallOutline , IoMailOutline  } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";



function DealersPage() {

  const tableHeadings = ["Name" , 'ID' , "Service Providers" , "Locations" , "Contact" , "Status" , "Action"] ;

  const tableData = [{
    checkBox : <input type='checkbox'></input>,
    name : "Samanta William",
    id : "#123456790",
    serviceProviders: 2,
    location: "Jakarta",
    contact: <div className='flex items-center justify-center gap-3'>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
            </div>,
    status : "Not Active",
    actionIcon : <BsThreeDots className='inline' />
  } ,{
    checkBox : <input type='checkbox'></input>,
    name : "Samanta William",
    id : "#123456789",
    serviceProviders: 2,
    location: "Jakarta",
    contact: <div className='flex items-center justify-center gap-3'>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
            </div>,
    status : "Active",
    actionIcon : <BsThreeDots className='inline' />
  } ,{
    checkBox : <input type='checkbox'></input>,
    name : "Samanta William",
    id : "#234567890",
    serviceProviders: 2,
    location: "Jakarta",
    contact: <div className='flex items-center justify-center gap-3'>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoCallOutline size={20} /></button>
              <button className='w-8 h-8 bg-dark_blue bg-opacity-10 text-dark_blue rounded-full flex justify-center items-center'><IoMailOutline size={20} /></button>
            </div>,
    status : "Not Active",
    actionIcon : <BsThreeDots className='inline' />
  }]

  // #4D44B5
  return (
    <div className='bg-blue_bg font-poppins'>
        <div className=' flex flex-col p-4 gap-2 md:gap-4 md:flex-row'>
            <DealerCard
            icon={<IoPersonOutline color='white' size={24}/>}
            iconBackgroundColor = "bg-violet"
            title="Dealers"
            count="932"
            percentage="+10%"
            percentageColor="text-green-500"/>
            <DealerCard 
            icon={<IoPersonOutline  color='white' size={24}/>}
            iconBackgroundColor = "bg-orange"
            title="Active Dealers"
            count="754"
            percentage="-0.5%"
            percentageColor="text-[#ff4550]"/>
            <DealerCard
            icon={<IoPersonOutline color='white' size={24}/>}
            iconBackgroundColor = "bg-orange"
            title="Inactive Dealers"
            count="754"
            percentage="-0.5%"
            percentageColor="text-[#ff4550]"/>
        </div>
        <div className=' flex flex-col justify-between p-4 px-5 font-poppins gap-4  md:flex-row md:gap-0 '>
            <DealerSearchBar/>
            <div className='flex items-center gap-4 flex-col md:flex-row'> 
              <DealerDropdown/>
              <AddDealerButton/>
            </div>
        </div>
        <DealerTable tableHeadings={tableHeadings} tableData={tableData} page={"dealers"}/>
        <div className='p-5 bg-white mx-5 rounded-b-lg'>
          <DealerPagination/>
        </div>
    </div>
  )
}

export default DealersPage