import { FiEdit } from "react-icons/fi";
import ServiceTypeComponent from "../../components/adminComponents/ServiceTypeComponent";
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
        { collar: "blue collar", leadQuantity:20,rate: 150 },
        { collar: "green collar",leadQuantity:30, rate: 250 },
      ],
    },
  ];

  // State to hold the currently selected service type object
  const [selectedService, setSelectedService] = useState(serviceType[0]);

  // Handle button click and update selectedService
  const handleButtonClick = (name) => {
    const selected = serviceType.find((service) => service.Name === name);
    setSelectedService(selected); // Update the selected service
  };

  return (
    <>
      <div className="flex gap-2 justify-around max-sm:flex-col ">
        <div className="bg-white w-1/4 h-[60rem] flex flex-col gap-5 max-sm:w-full max-sm:h-[18rem]">
          <div className="flex gap-[9.25rem] items-center">
            <h1 className="font-poppins text-4xl font-bold text-dark_blue px-2 py-4 ">
              Type
            </h1>
            <FiEdit size={"2.5rem"} />
          </div>
          <div className="flex flex-col gap-3 items-center p-2 ">
            <Button
              variant={"add"}
              onClick={() => handleButtonClick("Daily Work")}
            >
              Daily Work
            </Button>
            <Button
              variant={"add"}
              onClick={() => handleButtonClick("One Time Lead")}
            >
              One Time Lead
            </Button>
            <Button variant={"add"}>+Add New</Button>
          </div>
        </div>
        <ServiceTypeComponent service={selectedService} />
      </div>
    </>
  );
}

function Button({ variant, children, width, ...rest }) {
  const bgColor =
    variant === "primary"
      ? "bg-violet"
      : variant === "secondary"
      ? "bg-primary"
      : variant === "delete"
      ? "bg-red"
      : variant === "add"
      ? "bg-blue_bg"
      : "";
  const textColor =
    variant === "secondary"
      ? "text-violet"
      : variant === "add"
      ? "text-black"
      : "text-primary";
  const buttonWidth = width ? width : variant === "add" ? "w-full" : "";
  return (
    <button
      className={`rounded-[2.5rem] font-normal px-10 py-2 ${buttonWidth} ${bgColor} ${textColor} ${
        variant === "secondary" ? "border-2 border-violet" : ""
      } text-lg p-2`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ServiceType;
