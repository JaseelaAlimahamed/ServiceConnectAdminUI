import NotificationTable from "../../../components/adminComponents/notificationComponents/NotificationTable";
import NotificationForm from "../../../components/adminComponents/notificationComponents/NotificationForm";

const NotificationPage = () => {
  return (
    <div className="container  bg-blue_bg h-screen ">
    {/* Notification Table */}
    <div className="mb-8   ">
      <NotificationTable />
    </div>

    {/* Notification Form */}
    <div className="mb-8   ">
      <NotificationForm />
    </div>
  </div>
  );
};

export default NotificationPage;
