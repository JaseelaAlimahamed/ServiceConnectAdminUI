import { useSelector } from "react-redux";
import Admin from "../../components/adminComponents/dashBoardComponents/DashBoardLayout";
import DealerDashboard from "../dealerPages/DealerDashboard";
import FranchiseDashboard from "../franchisePages/DashboardPage";

const roleComponents = {
  admin: Admin,
  dealer: DealerDashboard,
  franchise: FranchiseDashboard,
};

const Dashboard = () => {
  const { role } = useSelector((state) => state.auth);
  const RoleDashboard = roleComponents[role] || null;

  return (
    <div className="h-screen">
      {RoleDashboard ? <RoleDashboard role={role} /> : <p>Invalid role. Please check your permissions.</p>}
    </div>
  );
};

export default Dashboard;
