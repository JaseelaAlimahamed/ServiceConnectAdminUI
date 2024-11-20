
import FranchiseCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/FranchiseCard';

import ActivitesCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/AcitvitiesCard';
import PaymentHistory from '../../components/FranchiseComponents/dashboard/dashboardcomponents/PaymentHistory';
import DealerCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/Dealercard';
import { FaRegUser } from "react-icons/fa";
import BalanceAnalytics from '../../components/FranchiseComponents/dashboard/dashboardcomponents/BalanceAnalytics';
import Complaints from '../../components/FranchiseComponents/dashboard/dashboardcomponents/complaints';
import IncompleteBookings from '../../components/FranchiseComponents/dashboard/dashboardcomponents/IncompleBookings';
import { useEffect, useState } from 'react';
import { getDashboardCount, getTotalComplaints } from '../../service/api/franchise/GetApi';
const DashboardPage = () => {

  const [countDashboardConfig, setCountDashboardConfig] = useState([]);

  useEffect( () => {
    const fetchDashboardCount = async () => {
      try {
        const count = await getDashboardCount();
        setCountDashboardConfig(count);
      } catch (error){
        console.error(error,"Failed to fetch Complaints");
        setCountDashboardConfig([]);
      }
    };
    fetchDashboardCount();
  }, []);
  //console.log(countDashboardConfig, "providers count");

  const [complaintsCountConfig, setComplaintsCountConfig] = useState([]);

  useEffect( () => {
    const fetchComplaintsCount = async () => {
      try {
        const count = await getTotalComplaints();
        setComplaintsCountConfig(count);
      } catch (error){
        console.error(error,"Failed to fetch Complaints");
        setComplaintsCountConfig([]);
      }
    };
    fetchComplaintsCount();
  }, []);
  //console.log(complaintsCountConfig, "complaint count");

  return (

    <div className=''>
      <div className='p-5'>
      <div className="grid grid-rows-2 grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-4">
 <DealerCard icon={<FaRegUser className=' text-white'/>} iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={countDashboardConfig.total_approved_service_providers} percentage={countDashboardConfig.percentage_change_service_provider} />
 <DealerCard icon={<FaRegUser className=' text-white'/>} iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Dealers"  count={countDashboardConfig.total_dealers_count} percentage= {countDashboardConfig.percentage_change_dealers} />
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Services"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>}  iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Complaints"  count={complaintsCountConfig.total_complaints} percentage={complaintsCountConfig.percentage_change} />
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Ads"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Registration Earnings"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Commission Earnings"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Ads Earnings"  count={932}/>
</div>
      </div>
      <div className=' flex gap-4 '>
        <div className='w-[100%] flex flex-col lg:w-[75%] gap-4 p-5'>
          <div className='w-full'>
            <FranchiseCard/>
          </div>
          <div>
            <PaymentHistory/>
          </div>
        </div>
        <div className=' hidden lg:block'>
           <div className="bg-white p-3 rounded-lg shadow-lg">
         <h3 className="text-xl mb-3  font-poppins text-dark_blue font-bold">Recent Activites</h3>
         <p className=' text-id_gray font-bold'>Tuesday April 12 2012</p>
        </div>
            <ActivitesCard bg="bg-red"/>
            <ActivitesCard bg="bg-blue-700"/>
            <ActivitesCard bg="bg-violet"/>
            <ActivitesCard bg="bg-green-700"/>


            <div className=' mt-10 h-9 bg-violet text-white rounded-full  flex justify-center items-center'><button>View More</button></div>
        </div>

      </div>
      <div className='p-5'>
        <BalanceAnalytics/>
      </div>
      <div className=' flex-col flex lg:flex-row p-5 gap-3'>
        <div className='w-[100%] lg:w-[100%]'>
        <IncompleteBookings/>

        </div>
        <div className='w=[100%] lg:w-[50%]'>
          <Complaints/>
          </div>
      </div>



    </div>
  
  );
};

export default DashboardPage;