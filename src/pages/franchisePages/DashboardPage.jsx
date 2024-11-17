
import FranchiseCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/FranchiseCard';

import ActivitesCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/AcitvitiesCard';
import PaymentHistory from '../../components/FranchiseComponents/dashboard/dashboardcomponents/PaymentHistory';
import DealerCard from '../../components/FranchiseComponents/dashboard/dashboardcomponents/Dealercard';
import { FaRegUser } from "react-icons/fa";
import BalanceAnalytics from '../../components/FranchiseComponents/dashboard/dashboardcomponents/BalanceAnalytics';
import Complaints from '../../components/FranchiseComponents/dashboard/dashboardcomponents/complaints';
import IncompleteBookings from '../../components/FranchiseComponents/dashboard/dashboardcomponents/IncompleBookings';
const DashboardPage = () => {
  return (

    <div className=''>
      <div className='p-5'>
      <div className="grid grid-rows-2 grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-4">
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-[#FB7D5B]" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-[#FB7D5B]" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-[#FB7D5B]" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-[#FB7D5B]" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
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