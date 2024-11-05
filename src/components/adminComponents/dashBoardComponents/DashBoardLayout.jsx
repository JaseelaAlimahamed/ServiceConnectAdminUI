import React from 'react'
import AdminCard from './AdminCard';
import PerfomanceChart from './PerfomanceChart';
import Finance from './Finance';
import RecentActivities from './RecentActivities';
import MessagesList from './MessagesList';
import CustomerArrival from './CustomerArrival';
import ServiceCategories from './ServiceCategories';
import Statistics from './Statitics';
import Revenue from './Revenue';
import ComplaintsLog from './ComplaintsLog';
import InCompleteBookings from './InCompleteBookings';



const DashBoardLayout = () => {
   
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">

                {/* Left Side (Content) */}
                <div className="lg:col-span-3 space-y-6 px-4">
                    {/* Cards */}
                    <div className="p-3">
                        <AdminCard />
                    </div>

                    {/* Performance Chart */}
                    <div className="p-3"><PerfomanceChart /></div>

                    {/* Calendar and Finance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3"><Finance /></div>
                        <div className="p-3"><Finance /></div>
                    </div>

                    {/* Customer Arrival Chart */}
                    <div className="p-3"><CustomerArrival /></div>

                    {/* Statistics and Pie Chart  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Statistics */}
                        <div className="p-3">
                            <h1 className='font-bold p-3'>Statistics</h1>
                            <Statistics />
                        </div>
                        {/* Revenue */}
                        <div className="p-3">
                            <h1 className='font-bold p-3'>Revenue</h1>
                            <Revenue />
                        </div>
                    </div>
                </div>

                {/* Right Side (Sidebar) */}
                <div className="lg:col-span-1 bg-primary h-max p-4">
                    <div className="w-full flex flex-col flex-wrap  xl:flex-col gap-10">
                        {/* Recent Activities */}
                        <div className="flex-1 min-h-[300px]">
                            <RecentActivities />
                        </div>

                        {/* Messages List */}
                        <div className="flex-1 min-h-[300px]">
                            <MessagesList />
                        </div>
                        {/* service categories */}
                        <div className="flex-1 min-h-[300px]">
                            <ServiceCategories />
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tables */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="p-5">
                <InCompleteBookings/>
                </div>
                <div className=" p-5">
                <ComplaintsLog/>
                </div>
            </div>
        </div>
    )
}

export default DashBoardLayout