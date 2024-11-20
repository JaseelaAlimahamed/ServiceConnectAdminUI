import React, { useEffect, useState } from 'react';
import DealerTable from '../../components/franchiseComponents/dealers/DealerTable';
import DealerCard from '../../components/franchiseComponents/dealers/DealerCard';
import DealerDropdown from '../../components/franchiseComponents/dealers/DealerDropdown';
import DealerPagination from '../../components/franchiseComponents/dealers/DealerPagination';
import DealerSearchBar from '../../components/franchiseComponents/dealers/DealerSearchBar';
import AddDealerButton from '../../components/franchiseComponents/dealers/AddDealerButton';
import { IoPersonOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import DealersManagement from '../../components/FranchiseComponents/dealersManagement/DealersManagement';
import { getFranchiseeDealerCount } from '../../service/api/franchise/GetApi';

function DealersPage() {
  const [dealerStats, setDealerStats] = useState({
    total_dealers: 0,
    active_dealers: 0,
    inactive_dealers: 0,
  });

  const tableHeadings = ["Name", 'ID', "Service Providers", "Locations", "Contact", "Status", "Action"];
  const dropdownValues = ["Newest", "Oldest"];
  

  useEffect(() => {
    const fetchDealerStats = async () => {
      try {
        const response = await getFranchiseeDealerCount();
        setDealerStats(response);
      } catch (error) {
        console.error("Error fetching dealer stats:", error);
      }
    };

    fetchDealerStats();
  }, []);

  return (
    <div className='bg-blue_bg font-poppins'>
      <div className=' flex flex-col p-4 gap-2 md:gap-4 md:flex-row'>
        <DealerCard
          icon={<IoPersonOutline color='white' size={24} />}
          iconBackgroundColor="bg-violet"
          title="Dealers"
          count={dealerStats.total_dealers}
          percentage="+10%"
          percentageColor="text-green-500"
        />
        <DealerCard
          icon={<IoPersonOutline color='white' size={24} />}
          iconBackgroundColor="bg-orange"
          title="Active Dealers"
          count={dealerStats.active_dealers}
          percentage="-0.5%"
          percentageColor="text-[#ff4550]"
        />
        <DealerCard
          icon={<IoPersonOutline color='white' size={24} />}
          iconBackgroundColor="bg-orange"
          title="Inactive Dealers"
          count={dealerStats.inactive_dealers}
          percentage="-0.5%"
          percentageColor="text-[#ff4550]"
        />
      </div>
      <div className=' flex flex-col justify-between p-4 px-5 font-poppins gap-4 lg:flex-row lg:gap-0 '>
        <DealerSearchBar />
        <div className='flex items-center gap-4 flex-col md:flex-row md:justify-between'>
          <DealerDropdown values={dropdownValues} />
          <AddDealerButton path='/Dealers'/>
        </div>
      </div>
      <DealerTable tableHeadings={tableHeadings} tableData={tableData} page={"dealers"} />
      <div className='p-5 bg-white mx-5 rounded-b-lg'>
        <DealerPagination />
      </div>
      <DealersManagement />
    </div>
  );
}

export default DealersPage;