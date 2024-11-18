import { useSelector } from "react-redux";
import Admin from "../../components/adminComponents/dashBoardComponents/DashBoardLayout";
import DealerDashboard from "../dealerPages/DealerDashboard";
import FranchiseDashboard from "../franchisePages/DashboardPage";
import { Dashboarddetails } from "../../service/api/admin/GetApi";
import { useEffect, useState } from "react";
import { Totalusers } from "../../service/api/admin/GetApi";
import {FinanceReport} from '../../service/api/admin/PostApi'
const roleComponents = {
  admin: Admin,
  dealer: DealerDashboard,
  franchise: FranchiseDashboard,
};

const Dashboard = () => {
  const { role } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    Total_Franchisees:0,
    Total_Dealers:0,
    Total_Service_Providers:0,
    Recent_Activities:[],
    Categories:[{}],
    Complaints:[],
    Incomplete_Bookings:[],
    total_customers:0,
    monthly_data: []
  });


  const RoleDashboard = roleComponents[role] || null;


useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await Dashboarddetails();
      const totalusers = await Totalusers();
      const financereport = await FinanceReport({"year":2016});
      console.log(financereport);
      console.log(totalusers)
      console.log(data)
     
        setState((prevState) => ({
          ...prevState,
          Total_Franchisees:data.Total_Franchisees,
          Total_Dealers:data.Total_Dealers,
    Total_Service_Providers:data.Total_Service_Providers,
    Recent_Activities:data.Recent_Activities,
    Categories:data.Categories,
    Complaints:data.Complaints,
    Incomplete_Bookings:data.Incomplete_Bookings,
    total_customers:totalusers.total_customers,
    monthly_data:financereport.data.monthly_data
        }));
      
    } catch (error) {
      console.error("Error fetching user data:", error);
      setState({})
    }
  };

  fetchData();
  
}, []);
console.log(state)

// console.log(tableDataConfig, "tableDataConfig");

  return (
    <div className="h-screen">
      {RoleDashboard ? <RoleDashboard data={state} /> : <p>Invalid role. Please check your permissions.</p>}
    </div>
  );
};

export default Dashboard;
