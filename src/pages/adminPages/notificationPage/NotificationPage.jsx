import NotificationTable from "../../../components/adminComponents/notificationComponents/NotificationTable";
import NotificationForm from "../../../components/adminComponents/notificationComponents/NotificationForm";

const NotificationPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Notification Table */}
      <div className="mb-8  w-full ">
        <NotificationTable />
      </div>

      {/* Notification Form */}
      <div className="mb-8  w-full  ">
        <NotificationForm />
      </div>
    </div>
  );
};

export default NotificationPage;
