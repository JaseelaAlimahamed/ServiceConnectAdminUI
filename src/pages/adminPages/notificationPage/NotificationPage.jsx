import NotificationTable from "../../../components/adminComponents/notificationComponents/NotificationTable";
import NotificationForm from "../../../components/adminComponents/notificationComponents/NotificationForm";

const NotificationPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Notification Table */}
      <div className="mb-8   md:mr-1 lg:mr-60 xl:mr-80">
        <NotificationTable />
      </div>

      {/* Notification Form */}
      <div className="mb-12  md:mr-1 lg:mr-60 xl:mr-80 ">
        <NotificationForm />
      </div>
    </div>
  );
};

export default NotificationPage;
