
import React from "react";
import BalanceAnalytics from "./BalanceAnalytics";
import IncompleteBookings from "./IncompleBookings";
import Complaints from "./complaints";

function FranchiseDashboard(){

    return(
        <div className="min-h-screen bg-gray-100 p-6 bg-black">
            <div className="max-w-6xl mx-auto sm:justify-center">

                <BalanceAnalytics />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                
                <div className="col-span-7">
                    <IncompleteBookings />
                </div>
                <div className="col-span-5">
                <Complaints />
                </div>

                </div>
            </div>
        </div>
    )
}
export default FranchiseDashboard;