import ServiceTypeComponent from "../../components/adminComponents/serviceType/ServiceTypeComponent";

import OptionsComponent from "../../components/adminComponents/serviceType/OptionsComponent";
import { useState } from "react";
function ServiceType() {
  const serviceType = [
    {
      id: 1,
      Name: "Daily Work",
      Details: "Electrical Work",
      Currency: "INR",
      services: [
        { collar: "white collar", rate: 300 },
        { collar: "grey collar", rate: 200 },
        { collar: "black collar", rate: 100 },
      ],
    },
    {
      id: 2,
      Name: "One Time Lead",
      Details: "Plumbing",
      Currency: "INR",
      services: [
        { collar: "blue collar", leadQuantity: 20, rate: 150 },
        { collar: "green collar", leadQuantity: 30, rate: 250 },
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(serviceType[0]);

  return (
    <>
      <div className="flex gap-2 justify-around max-sm:flex-col ">
        <OptionsComponent />
        <ServiceTypeComponent service={selectedService} />
      </div>
    </>
  );
}

export default ServiceType;
