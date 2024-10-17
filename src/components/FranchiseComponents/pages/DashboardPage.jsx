// import React from 'react';
// import { FiPhone, FiMail } from 'react-icons/fi';
import FranchiseCard from '../dashboard/dashboardcomponents/FranchiseCard';
// import AdCard from './AdCard';
// import PaymentHistory from './PaymentHistory';
// import ReviewCard from './ReviewCard';
// import ServiceDetail from './ServiceDetail';
// import RecentServiceDetails from './Recent_ServiceDetails';
// import ProfileCard from './ProfileCard';
// import RecentActivities from '../dashboardcomponents/RecentActivities';
import ActivitesCard from '../dashboard/dashboardcomponents/AcitvitiesCard';
import PaymentHistory from '../dashboard/dashboardcomponents/PaymentHistory';
import FranchiseDashboard from '../dashboard/dashboardcomponents/FranchiseDashboard';
import DealerCard from '../dashboard/dashboardcomponents/Dealercard';
import { FaRegUser } from "react-icons/fa";
import BalanceAnalytics from '../dashboard/dashboardcomponents/BalanceAnalytics';
import Complaints from '../dashboard/dashboardcomponents/complaints';
import IncompleteBookings from '../dashboard/dashboardcomponents/IncompleBookings';
const DashboardPage = () => {
  return (

    <div>
      <div className='p-5'>
      <div class="grid grid-rows-2 grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-4">
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
 <DealerCard icon={<FaRegUser className=' text-white'/>} percentage="+10%" iconBackgroundColor="bg-blue-700" percentageColor="text-green-500" title="Total Service Providers"  count={932}/>
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
  //   <div className="p-6 lg:flex lg:space-x-6 bg-gray-100">
      
  //     <div className="lg:w-3/4 space-y-8 bg-zinc-400">
    
       
  //       <FranchiseCard/>
  //       <PaymentHistory/>
      

       
          

        
        

       
  //     </div>

  //     {/* <FranchiseDashboard/> */}
     
      
  //     <div className="lg:w-1/4 mt-8 lg:mt-0">
  //       <div className="bg-white p-3 rounded-lg shadow-lg">
  //         <h3 className="text-xl mb-3  font-poppins text-dark_blue font-bold">Recent Activites</h3>
  //          <p className=' text-id_gray font-bold'>Tuesday April 12 2012</p>
  //        </div>

         


  
  // //     </div>
  //   </div>
  );
};

export default DashboardPage;