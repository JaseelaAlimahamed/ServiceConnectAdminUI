import ReUsableTable from "../../reUsableComponents/ReUsableTable";




const ServiceProviderManagement = () => {
  const tableConfig = { type: "serviceprovidermanagement" };
  const tableColConfig = [
    "Name",
    "ID",
    "Date",
    "Verified by",
    "Location",
    "Contact",
    "Status",
    "Action",
  ];
  const tableDataConfig = [
    {
      name: "Samanta William",
      id: "#132923443",
      date: "May 25, 2024",
      verifiedBy: "Jakarta",
      location: "Sydney",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "michael.smith@example.com" },
      status: "Active",
    },
    {
      name: "Winnie Berry",
      id: "#129876543",
      date: "April 05, 2024",
      verifiedBy: "Pune",
      location: "Mumbai",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "winnie.berry@example.com" },
      status: "Not Verified",
    },
    {
      name: "Cecelia Bailey",
      id: "#129872443",
      date: "December 25, 2024",
      verifiedBy: "Pune",
      location: "Mumbai",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "michael.smith@example.com" },
      status: "Active",
    },
    {
      name: "Isabelle Maxwell",
      id: "#129376523",
      date: "June 03, 2024",
      verifiedBy: "Pune",
      location: "Mumbai",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "isabelle.maxwell@example.com" },
      status: "Not Verified",
    },
    {
        name: "Mayme Cortez",
        id: "#129276543",
        date: "January 28, 2023",
        verifiedBy: "Pune",
        location: "Mumbai",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "scott.smith@example.com" },
        status: "Active",
      },
      {
        name: "Helena Rogers",
        id: "#129876523",
        date: "March 05, 2024",
        verifiedBy: "Pune",
        location: "Chennai",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Not Verified",
      },
  ];

  return (
    <div className="w-full font-poppins px-6 pb-10 lg:px-10">
      <ReUsableTable
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />
    </div>
  );
};

export default ServiceProviderManagement;