import NotificationTable from "../../../components/adminComponents/notificationComponents/NotificationTable";
import NotificationForm from "../../../components/adminComponents/notificationComponents/NotificationForm";
import { useSelector } from "react-redux";

const NotificationPage = () => {
  const role = useSelector(state => state.auth.role);
  console.log(role); // Use console.log for debugging

  return (
    <div className="container bg-blue_bg h-fit my-10 gap-2 flex flex-col">
      {/* Notification Table */}
      <div className=" ">
        <NotificationTable />
      </div>

      {/* Notification Form - Visible only if role is 'admin' */}
      {role === 'admin' && (
        <div className="mb-8">
          <NotificationForm />
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
